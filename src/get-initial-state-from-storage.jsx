import styled from "styled-components";
import CB from "./code-block";
import { useSlice } from "@slices";

const GetInitialStateFromStorage = () => {
  const [, setIsShownMobileLateralMenu] = useSlice("isShownMobileLateralMenu");
  return (
    <Container onClick={() => setIsShownMobileLateralMenu(false)}>
      <P>
        To get initial state of a React Context slice from local storage for web
        or async storage for React Native you do it like this.
      </P>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    counter: { initialArg: 0, isGetInitialStateFromStorage: true }, // React Context slice
    // rest of slices (either Redux or React Context slices)
  },
});`}</CodeBlock>
      <P>
        Then you should persist the state of the slice when it changes in your
        component.
      </P>
      <CodeBlock>{`// app.jsx
import { useSlice } from "./slices";
import { useEffect } from "react";

const App = () => {
  const [count, setCount] = useSlice("counter");

  // this persist the value to local storage
  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      {count}
    </>
  );
};

export default App;`}</CodeBlock>
      <P>For React Native you do:</P>
      <CodeBlock>{`// slices.js
import getHookAndProviderFromSlices from "react-context-slices";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const { useSlice, Provider } = getHookAndProviderFromSlices({
  slices: {
    counter: { initialArg: 0, isGetInitialStateFromStorage: true }, // React Context slice
    // rest of slices (either Redux or React Context slices)
  },
  AsyncStorage, // <-- set AsyncStorage key to AsyncStorage for React Native
});`}</CodeBlock>
      <P>
        And then in your component you should do it like this when persisting
        state value:
      </P>
      <CodeBlock>{`// app.jsx
import React, { useEffect, useRef } from "react";
import { useSlice } from "./slices";
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const isInitialMountRef = useRef(true);
  const [count, setCount] = useSlice("counter");

  useEffect(() => {
    (async () => {
      !isInitialMountRef.current &&
        (await AsyncStorage.setItem("counter", JSON.stringify(count)));
    })();
  }, [count]);

  useEffect(() => {
    isInitialMountRef.current = false;
  }, []);

  return (
    <View>
      <Button title="+" onPress={() => setCount((c) => c + 1)} />
      <Text>{count}</Text>
    </View>
  );
};

export default App;`}</CodeBlock>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  flex: 1;
`;

const CodeBlock = styled(CB)`
  border-radius: 10px;
  max-width: calc(100%);
  overflow: auto;
`;

const P = styled.div``;

export default GetInitialStateFromStorage;
