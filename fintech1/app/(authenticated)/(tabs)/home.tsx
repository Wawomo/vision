import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import RoundBtn from "@/components/RoundBtn";
import { useBalanceStore } from "@/store/balance";
import { MyStyles } from "@/constants/Styles";

export default function TabThreeScreen() {
  const { balance, runTransaction, transactions, clearTransactions } =
    useBalanceStore();

  const onAddMoney = () => {
    runTransaction({
      id: Math.random().toString(),
      amount: Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1),
      date: new Date(),
      title: "Added money",
    });
  };

  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance()}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <RoundBtn icon={"add"} text={"Add money"} onPress={onAddMoney} />
        <RoundBtn icon={"refresh"} text={"Exchange"} />
        <RoundBtn icon={"list"} text={"Details"} />
        <RoundBtn icon={"add"} text={"clear"} onPress={clearTransactions} />
      </View>
      <Text style={MyStyles.header}>transactions</Text>
      <View style={styles.transactions}>
        {transactions.length === 0 && (
          <Text style={{ padding: 14, color: "gray" }}>
            No transactions yet
          </Text>
        )}
        ,
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  balance: {
    fontSize: 60,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 30,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transactions: {
    margin: 20,
  },
});
