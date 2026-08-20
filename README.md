# E-commerce: segurança, checkout e experiência do cliente

> Case study técnico baseado em um projeto comercial real. A identidade visual, os dados, URLs, credenciais e o código proprietário foram removidos. Os exemplos deste repositório são genéricos e foram recriados exclusivamente para fins de portfólio.

## Contexto

Atuação na evolução de uma loja virtual desenvolvida com **React, TypeScript, Supabase e Vercel**, com foco em tornar o fluxo de compra mais seguro, confiável e simples de usar em desktop e mobile.

## Principais entregas

- Reforço do checkout: preços, frete e cupons passaram a ser recalculados no backend; valores recebidos pelo navegador não são tratados como autoridade.
- Autorização de pedidos: cada cliente só pode consultar ou cancelar pedidos que pertencem à própria conta.
- Regras de cancelamento: cancelamento permitido apenas enquanto o pedido está pendente.
- Proteção de dados pessoais: inclusão de CPF validado, associado de forma única à conta e disponível apenas no fluxo administrativo autorizado.
- Ajustes de políticas de banco e RLS no Supabase para reduzir acesso indevido a pedidos, cupons, contatos e logs de e-mail.
- Correção do login em navegadores móveis.
- Integração de pagamento estruturada com funções de backend e segredos mantidos fora do frontend.
- Validação do webhook de pagamento planejada para checar assinatura, status, valor e idempotência.
- Melhorias de interface: preços promocionais destacados e selo automático de percentual de desconto.

## Arquitetura adotada

```text
Cliente (React)
      |
      | dados mínimos do carrinho
      v
Função segura no backend
      |
      | recalcula produtos, estoque, cupom e frete
      v
Banco + provedor de pagamento
      |
      | confirmação assinada por webhook
      v
Atualização idempotente do pedido
```

## Decisões de segurança

| Risco | Abordagem aplicada |
| --- | --- |
| Manipulação de preço no navegador | Cálculo de itens, desconto e total no backend |
| Acesso a pedido de outro usuário | Autenticação, checagem de propriedade e RLS |
| Cancelamento após pagamento | Regra de estado: somente pedidos pendentes |
| Exposição de chaves | Segredos em variáveis de ambiente do backend; nenhuma credencial no repositório |
| Fraude ou dado fiscal inválido | Validação de CPF e restrição de um CPF por conta |
| Confirmação forjada de pagamento | Webhook com validação de assinatura e idempotência |

## Exemplos recriados

Os exemplos na pasta [`examples`](examples) ilustram dois padrões usados no trabalho: cálculo de promoção no cliente apenas para apresentação e autorização no backend para operações sensíveis.

## Resultados

- Checkout mais resistente a manipulação de valores.
- Dados sensíveis com acesso reduzido ao necessário.
- Regras críticas transferidas do navegador para o backend.
- Fluxo de compra validado em produção sem criar cobranças reais durante os testes.
- Experiência de login e compra mais consistente em dispositivos móveis.

## Tecnologias

`React` · `TypeScript` · `Supabase` · `PostgreSQL / RLS` · `Edge Functions` · `Vercel` · `Mercado Pago`

## Observação de confidencialidade

Este é um material de apresentação técnica. Não contém código-fonte, imagens, dados de clientes, configurações, credenciais, chaves, nomes internos ou informações de infraestrutura do projeto comercial original.
