import { connect } from "amqplib";

const connection = await connect("amqp://localhost");
const channel = await connection.createChannel();

const queue = "messages";

await channel.assertQueue(queue, { durable: false });

channel.consume(queue, (message) => {
  console.log(`[x] Received message: ${message.content.toString()}`);
});
