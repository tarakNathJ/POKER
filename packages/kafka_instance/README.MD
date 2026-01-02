[![npm version](https://img.shields.io/npm/v/kafkajs?color=%2344cc11&label=stable)](https://www.npmjs.com/package/kafkajs) [![npm pre-release version](https://img.shields.io/npm/v/kafkajs/beta?label=pre-release)](https://www.npmjs.com/package/kafkajs) [![Build Status](https://dev.azure.com/tulios/kafkajs/_apis/build/status/tulios.kafkajs?branchName=master)](https://dev.azure.com/tulios/kafkajs/_build/latest?definitionId=2&branchName=master) [![Slack Channel](https://join.slack.com/t/kafkajs/shared_invite/zt-1ezd5395v-SOpTqYoYfRCyPKOkUggK0Abadge.svg)](https://join.slack.com/t/kafkajs/shared_invite/zt-1ezd5395v-SOpTqYoYfRCyPKOkUggK0A)
<br />

<p align="center">
  <a href="https://kafka.js.org">
      <img src="https://raw.githubusercontent.com/tulios/kafkajs/master/logo/v2/kafkajs_circle.svg" alt="Logo" width="125" height="125">
  </a>

  <h3 align="center">KafkaJS</h3>

  <p align="center">
    A modern Apache Kafka® client for Node.js
    <br />
    <a href="https://kafka.js.org/"><strong>Get Started »</strong></a>
    <br />
    <br />
    <a href="https://kafka.js.org/docs/getting-started" target="_blank">Read the Docs</a>
    ·
    <a href="https://github.com/tulios/kafkajs/issues/new?assignees=&labels=&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/tulios/kafkajs/issues/new?assignees=&labels=&template=feature_request.md&title=">Request Feature</a>
  </p>
</p>

## <a name="about"></a> About

KafkaJS is a modern [Apache Kafka](https://kafka.apache.org/) client for Node.js. It is compatible with Kafka 0.10+ and offers native support for 0.11 features.

<small> this packages give you kafka instance and producer and consumer.</small>

### <a name="getting-started"></a> Getting Started

```sh
npm install kafkajs
# yarn add kafkajs
```

#### <a name="usage"></a> Usage

```javascript
const { Kafka } = require('kafkajs')

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
```
