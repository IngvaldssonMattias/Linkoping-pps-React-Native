import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#231f28",
  },

  circle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 5,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  mode: {
    fontSize: 22,
    fontWeight: '600',
    color: "white",
  },

  time: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 5,
    color: "white"
  },

  buttons: {
    flexDirection: 'row',
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginHorizontal: 8,
    borderRadius: 10,
  },

  startButton: {
    backgroundColor: '#4caf50',
  },

  stopButton: {
    backgroundColor: '#f44336',
  },

  resetButton: {
    backgroundColor: '#2196f3',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  buttonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.96 }],
  },
});