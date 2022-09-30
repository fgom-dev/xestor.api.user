# xestor.api.user

Microsserviço user para o sistema Xestor. 
Para algumas rotas esse Microsserviço se comunica com outro Microsserviço, chamada de xestor.api.auth, para fazer a verificação do accessToken
O objetivo dele é gerenciar usuários do sistema

## Tecnologis utilizadas:
- NodeJS
- Typescript
- Express
- Prisma
- BCrypt

## Funcionalidades:
- Create User: Cadastra um novo usuário no sistema
- Update User: Atualiza informações de um usuário
- Inactivate User: Torna um usuário inativo

## Obs: No futuro terá uma documentação.
## Serviço rodando pela plataforma Railway: https://xestorapiuser-production.up.railway.app/
