module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-paper/babel', // 👈 Paper ke liye plugin (sahi hai)
    'react-native-reanimated/plugin', // 👈 Ye development aur production dono ke liye chahiye
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'react-native-reanimated/plugin'],
    },
  },
};

// module.exports = {
//   presets: ['module:@react-native/babel-preset'],

//   env: {
//     production: {
//       plugins: ['react-native-paper/babel', 'react-native-reanimated/plugin'],
//     },
//   },
// };
