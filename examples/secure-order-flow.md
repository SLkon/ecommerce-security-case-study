# Padrão: operação de pedido no backend

```ts
// Pseudocódigo recriado — não é código do projeto comercial.
async function cancelOrder(request: Request, currentUserId: string) {
  const { orderId } = await request.json();
  const order = await database.orders.findById(orderId);

  if (!order || order.userId !== currentUserId) {
    throw new Error("Pedido não encontrado");
  }

  if (order.status !== "pending") {
    throw new Error("Somente pedidos pendentes podem ser cancelados");
  }

  await database.orders.update(orderId, { status: "cancelled" });
}
```

O princípio é que o navegador solicita a operação, mas a decisão é sempre tomada no servidor depois da autenticação, da verificação de propriedade e da regra de negócio.
