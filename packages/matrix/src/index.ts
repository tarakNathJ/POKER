import promClient from "prom-client";
import { config } from "dotenv";
config();

class PrometheusService {
  public registry: promClient.Registry;
  public gateway: promClient.Pushgateway<string | any> ;

  // HTTP Metrics
  public req_res_time: promClient.Histogram<'method' | 'route' | 'status_code'>;

  // WebSocket Metrics
  public ws_connections: promClient.Counter<string>;
  public ws_messages_received: promClient.Counter<string>;
  public ws_messages_sent: promClient.Counter<string>;
  public ws_active_connections: promClient.Gauge<string>;

  // Kafka / Trade Metrics
  public trade_processing_duration: promClient.Histogram<'topic'>;
  public kafka_messages_consumed: promClient.Counter<'topic'>;
  public kafka_messages_produced: promClient.Counter<'topic'>;
  public trade_tp_triggered: promClient.Counter<string>;
  public trade_sl_triggered: promClient.Counter<string>;
  public trade_hold: promClient.Counter<string>;

  constructor() {
    this.registry = new promClient.Registry();

    // PushGateway setup
    if (!process.env.CLIENT_URL) {
      throw new Error("CLIENT_URL environment variable is required");
    }
    this.gateway = new promClient.Pushgateway(process.env.CLIENT_URL, {}, this.registry);

    // Collect default metrics
    promClient.collectDefaultMetrics({ register: this.registry });

    // HTTP Histogram (in seconds)
    this.req_res_time = new promClient.Histogram({
      name: "http_express_req_res_time_seconds",
      help: "HTTP request/response time in seconds",
      labelNames: ["method", "route", "status_code"],
      buckets: [0.001, 0.01, 0.05, 0.1, 0.2, 0.5, 1, 2, 5],
      registers: [this.registry],
    });

    // WebSocket Metrics
    this.ws_connections = new promClient.Counter({
      name: "ws_connections_total",
      help: "Total number of WebSocket connections",
      registers: [this.registry],
    });
    this.ws_messages_received = new promClient.Counter({
      name: "ws_messages_received_total",
      help: "Total number of WebSocket messages received",
      registers: [this.registry],
    });
    this.ws_messages_sent = new promClient.Counter({
      name: "ws_messages_sent_total",
      help: "Total number of WebSocket messages sent",
      registers: [this.registry],
    });
    this.ws_active_connections = new promClient.Gauge({
      name: "ws_active_connections",
      help: "Number of active WebSocket connections",
      registers: [this.registry],
    });

    // Kafka / Trade Metrics
    this.trade_processing_duration = new promClient.Histogram({
      name: "trade_processing_duration_seconds",
      help: "Time taken to process a single trade event",
      labelNames: ["topic"],
      buckets: [0.005, 0.01, 0.05, 0.1, 0.2, 0.5, 1],
      registers: [this.registry],
    });
    this.kafka_messages_consumed = new promClient.Counter({
      name: "kafka_messages_consumed_total",
      help: "Total Kafka messages consumed",
      labelNames: ["topic"],
      registers: [this.registry],
    });
    this.kafka_messages_produced = new promClient.Counter({
      name: "kafka_messages_produced_total",
      help: "Total Kafka messages produced",
      labelNames: ["topic"],
      registers: [this.registry],
    });
    this.trade_tp_triggered = new promClient.Counter({
      name: "trade_take_profit_triggered_total",
      help: "Total number of TP triggers",
      registers: [this.registry],
    });
    this.trade_sl_triggered = new promClient.Counter({
      name: "trade_stop_loss_triggered_total",
      help: "Total number of SL triggers",
      registers: [this.registry],
    });
    this.trade_hold = new promClient.Counter({
      name: "trade_hold_total",
      help: "Trades kept on hold",
      registers: [this.registry],
    });
  }

  
   //Push metrics to Prometheus PushGateway
  
  public async pushMetrics(jobName = "service_metrics") {
    try {
      await this.gateway.pushAdd({
        jobName,
        groupings: { instance: process.env.HOSTNAME || "unknown" },
      });
      console.log(`Metrics pushed for job: ${jobName}`);
    } catch (err: any) {
      console.error("Failed to push metrics:", err.message);
    }
  }

  
    // Create custom job metrics with counter + duration histogram
   
  public createJobMetrics(job_name: string) {
    if (!/^[a-zA-Z_:][a-zA-Z0-9_:]*$/.test(job_name)) {
      throw new Error(`Invalid job_name "${job_name}"`);
    }

    const jobRegistry = new promClient.Registry();
    const jobGateway = new promClient.Pushgateway(process.env.CLIENT_URL!, {}, jobRegistry);

    const jobCounter = new promClient.Counter({
      name: `${job_name}_runs_total`,
      help: `Total number of runs for job ${job_name}`,
      registers: [jobRegistry],
    });

    const jobDuration = new promClient.Histogram({
      name: `${job_name}_duration_seconds`,
      help: `Duration of job ${job_name}`,
      buckets: [0.1, 0.5, 1, 1.5, 2, 5, 10, 30],
      registers: [jobRegistry],
    });

    return {
      jobCounter,
      jobDuration,
      push: async () => {
        try {
          await jobGateway.pushAdd({ jobName: job_name });
        } catch (err: any) {
          console.error("Failed to push job metrics:", err.message);
        }
      },
    };
  }
}

export { PrometheusService };