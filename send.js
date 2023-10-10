import { connect } from "amqplib";

const connection = await connect("amqp://localhost");
const channel = await connection.createChannel();

const queue = "messages";

await channel.assertQueue(queue, { durable: false });

const message = `Now you see me!`;
channel.sendToQueue(queue, Buffer.from(message));
