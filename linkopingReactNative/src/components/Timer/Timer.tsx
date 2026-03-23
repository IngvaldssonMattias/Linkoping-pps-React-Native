import React from "react";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import { useSimpleTimer } from "../../utils/useSimpleTimer";
import { formatTime } from "../../utils/Time";
import { Styles } from "../../styles/Timer.style";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Timer = () => {
  const { timeLeft, mode, isRunning, setIsRunning, reset } = useSimpleTimer();

  return (
    
      <SafeAreaView>
        <View style={Styles.container}>
          <View style={Styles.circle}>
            <Text style={Styles.mode}>{mode}</Text>
            <Text style={Styles.time}>{formatTime(timeLeft)}</Text>
          </View>

          <View style={Styles.buttons}>
            <Pressable
              onPress={() => setIsRunning(true)}
              style={({ pressed }) => [
                Styles.button,
                Styles.startButton,
                pressed && Styles.buttonPressed,
              ]}
            >
              <Text style={Styles.buttonText}>Start</Text>
            </Pressable>

            <Pressable
              onPress={() => setIsRunning(false)}
              style={({ pressed }) => [
                Styles.button,
                Styles.stopButton,
                pressed && Styles.buttonPressed,
              ]}
            >
              <Text style={Styles.buttonText}>Stop</Text>
            </Pressable>

            <Pressable
              onPress={reset}
              style={({ pressed }) => [
                Styles.button,
                Styles.resetButton,
                pressed && Styles.buttonPressed,
              ]}
            >
              <Text style={Styles.buttonText}>Reset</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    
  );
};

export default Timer;
