import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container} from './style';

const orders: Order[] = [
  {

    '_id': '63b610bb4cfb40c1fa557fa4',
    'table': '123',
    'status': 'DONE',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1672794386763-quatro-queijos.png',
          'price': 40,

        },
        'quantity': 3,
        '_id': '63b610bb4cfb40c1fa557fa5'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1672795681796-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '63b610bb4cfb40c1fa557fa6'
      }
    ],
  },


];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon = "🕑"
        title = "Fila de Espera..."
        orders = {orders}
      />
      <OrdersBoard
        icon = "👩‍🍳"
        title = "Em Produção."
        orders = {[]}
      />
      <OrdersBoard
        icon = "✅"
        title = "Pronto!"
        orders = {[]}
      />

    </Container>
  );
}