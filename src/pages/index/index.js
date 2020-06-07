import * as React from "react";
import { View, Button } from "remax/one";
import { MainLayout } from "../../components";
import { useCount, useIncrement } from "../../context";
import styles from "./index.less";

export default () => {
  const count = useCount();
  const increment = useIncrement();
  return (
    <View className={styles.app}>
      <MainLayout>
        <View>Current count: {count}.</View>
        <Button onTap={increment}>increse +</Button>
      </MainLayout>
    </View>
  );
};
