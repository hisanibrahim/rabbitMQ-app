## RabbitMQ App


#### Get started

1. `docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12-management`
2. `node receive.js`
3. `node send.js`

Even if the receiver down for sometime rabbitMQ store the messages and send it when the receiver up