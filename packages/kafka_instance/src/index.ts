import { Kafka, type Consumer, type Producer } from "kafkajs";

class kafka_instance {
  private producer: Producer | undefined;
  private consumer: Consumer | undefined;
  private instance: undefined | Kafka;
  constructor(client_id: string, broker: string[]) {
    this.instance = new Kafka({
      clientId: client_id,
      brokers: [...broker],
    });
  }

  public async producer_instance() {
    if (this.producer) return this.producer;
    this.producer = this.instance?.producer();
    await this.producer?.connect();
    return this.producer;
  }

  public async consumer_instance(
    topic: string,
    from_Begin: boolean,
    groupId: string
  ) {
    if (this.consumer) return this.consumer;
    this.consumer = this.instance?.consumer({ groupId: groupId });
    await this.consumer?.connect();
    await this.consumer?.subscribe({ topic: topic, fromBeginning: from_Begin });
    return this.consumer;
  }
}

export default kafka_instance;