type User = {
  id: number;
  firstname: string;
  surname: string;
  email: string;
  balance: string;
  picture: string;
  address: string;
  phone: string;
  favorite_movie: number;
  transactions?: Transaction[];
};

type Transaction = {
  amount: string;
  date: string;
  type: string;
  name: string;
};
