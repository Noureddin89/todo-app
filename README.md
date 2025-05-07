# 📝 React Native Todo App

A professional Todo app built with **React Native**, **TypeScript**, and **Expo** using a scalable, modular architecture.

## 📱 Features

- ✅ Add, remove, complete, and cancel tasks
- 📅 Optional due date support
- 🗑 Cancel task with cancellation reason
- 🧠 Persistent storage using `AsyncStorage`
- 📁 Scalable file/tab structure for future extension
- 🌐 Expo Web + Android/iOS compatibility

## 📂 Project Structure
.
├── App.tsx
├── src/
│   ├── components/      # UI components (e.g., TaskItem)
│   ├── context/         # Global state management (React Context)
│   ├── navigation/      # Tab + Stack navigation
│   ├── screens/         # Home, AddTask, Settings
│   └── utils/           # Utility functions (e.g., storage)
├── assets/              # App icons and images
├── app.json             # Expo config
├── tsconfig.json        # TypeScript config

````

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- Yarn (or npm)
- Expo CLI:  
  ```bash
  npm install -g expo
````

### Installation
git clone https://github.com/yourusername/react-native-todo-app.git
cd react-native-todo-app
yarn install


### Run the App

🔧 Web
npx expo start --web
```

📱 Android / iOS (with Expo Go)
npx expo start --tunnel
```

Scan the QR code in Expo Go app on your phone.

> 🔄 Use `--clear` if you're facing cache-related issues:
> `npx expo start --tunnel --clear`

---

## 🧠 Roadmap

* [ ] Task editing
* [ ] Categories or labels
* [ ] Notification reminders
* [ ] Backend sync & authentication
* [ ] Dark mode support

## 🛠 Built With

* [React Native](https://reactnative.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Expo](https://expo.dev/)
* [React Navigation](https://reactnavigation.org/)

## 📄 License

```

