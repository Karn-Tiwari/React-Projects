# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Sabse pehle to installation karenge redux toolkit aur react redux ki
2. store banayenge
3. features k hisab se todoSlice, jaisa slice baneynge
   3.1 createSlice function me object pass karenge jisme 3 property hongi
   3.1.1 name
   3.1.2 initialState
   3.1.3 reducers jo jyada kuch nhi functionality hai jisme bht sari functionality ho sakti hai jaise
   addTodo :(state,action)=>{}
   removeTodo:(state,action)=>{}

4. useDispatch ka matlab hota hai functionality ko dispatch karna jo ki hum AddTodo components me banaye hai ek form me

5. Dispatch Reducer ka use karte hue Store me value change karta hai

6. dispatch me addTodo ko pass kar denge aur addTodo reducer me input text expect karta hai to usme seedhe dispatch(addTodo(input)) pass kar denge
