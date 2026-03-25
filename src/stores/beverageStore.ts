import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json"
import syrups from "../data/syrups.json"
import creamers from "../data/creamers.json"

export interface DrinkType{
  name: string;
  temp: string;

  base: {
  id: string;
  name: string;
  color: string;
  };

  syrup: {
  id: string;
  name: string;
  color: string;
  };

  creamer: {
  id: string;
  name: string;
  color: string;
  };
};

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[1],
    bases: bases,
    currentBase: bases[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    currentName: "",
    currentDrink: <DrinkType>{},
    drinkList: <DrinkType[]>[]
}),

  actions: {
    makeBeverage() {
      this.drinkList.push({name: this.currentName, temp: this.currentTemp, base: this.currentBase, syrup: this.currentSyrup, creamer: this.currentCreamer});
    },
    showBeverage() {
      this.currentTemp = this.currentDrink.temp;
      this.currentBase = this.currentDrink.base;
      this.currentName = this.currentDrink.name;
      this.currentCreamer = this.currentDrink.creamer;
      this.currentSyrup = this.currentDrink.syrup;
    },
  },
  persist: true,
});
