<template>
  <div>
    <Beverage :noSyrup="currentSyrup.id === 's1'" :noCreamer="currentCreamer.id === 'c1'" :isIced="currentTemp === 'Cold'" :baseColor="currentBase.color" :creamerColor="currentCreamer.color" :syrupColor="currentSyrup.color" />
    <ul>
      <li>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
              @click="updateTemp(temp)"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="base.id"
              :value="base"
              v-model="beverageStore.currentBase"
              @click="updateBase(base)"
            />
            {{ base.name }}
          </label>
        </template>  
      </li>
      <li>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="syrup.id"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
              @click="updateSyrup(syrup)"
            />
            {{ syrup.name }}
          </label>
        </template>  
      </li>
      <li>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="creamer.id"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
              @click="updateCreamer(creamer)"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" v-model="beverageStore.currentName" placeholder="Beverage Name" />
    <button @click="makeBeverage()">🍺 Make Beverage</button>
    <div id="beverage-container" style="margin-top: 20px">
      <template v-for="drink in beverageStore.drinkList" :key="drink.name">
        <label>
          <input
          type="radio"
          v-model="beverageStore.currentDrink"
          :value="drink"
          @click="showBeverage(drink)"
          />
          {{ drink.name }}
        </label>    
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "./stores/beverageStore";
import Beverage from "./components/Beverage.vue";
import { DrinkType } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
const temps = beverageStore.temps;
const bases = beverageStore.bases;
const syrups = beverageStore.syrups;
const creamers = beverageStore.creamers;
var currentTemp = beverageStore.currentTemp;
var currentBase = beverageStore.currentBase;
var currentSyrup = beverageStore.currentSyrup;
var currentCreamer = beverageStore.currentCreamer;

function updateCreamer(creamer :{id: string, name: string, color: string}){
  currentCreamer = creamer;
}

function updateBase(base :{id: string, name: string, color: string}){
  currentBase = base;
}
function updateSyrup(syrup :{id: string, name: string, color: string}){
  currentSyrup = syrup;
}
function updateTemp(temp :string){
  currentTemp = temp;
}
function makeBeverage(){
  beverageStore.makeBeverage();
}
function showBeverage(drink:DrinkType){
  updateBase(drink.base);
  updateCreamer(drink.creamer);
  updateSyrup(drink.syrup);
  updateTemp(drink.temp);
  beverageStore.currentDrink = drink;
  beverageStore.showBeverage();
}

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
