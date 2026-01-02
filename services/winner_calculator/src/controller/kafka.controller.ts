import { kafka_instance } from "@kafka/pocker";
import type { Consumer, Producer, Kafka } from "kafkajs";

class winner_instance {
  private kafka_init: any;
  private producer: Producer | undefined;
  private consumer: Consumer | undefined;

  constructor(client_id: string, broker: string) {
    this.kafka_init = new kafka_instance(client_id, [broker]);
  }

  public async main_controller(
    consumer_topic: string,
    groupId: string,
    from_begin: boolean,
    producer_topic: string
  ) {
    this.consumer = await this.kafka_init?.consumer_instance(
      consumer_topic,
      from_begin,
      groupId
    );

    this.consumer?.run({
      eachMessage: async ({ topic, partition, message }) => {
        const row_value = message.value?.toString();
        if (!row_value) {
          return;
        }
        const value_convert_in_object = JSON.parse(row_value);
      },
    });
  }
}
