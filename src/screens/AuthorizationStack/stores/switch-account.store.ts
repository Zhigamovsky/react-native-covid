import { observable, computed, action, autorun, reaction } from "mobx"
import { AccountTypes } from "../static/data";

class SwitchAccountStore {
  constructor(){
    reaction(
      () => this.accountType,
      _ => console.log('--',this.accountType, _)
    );
  }

  @observable 
  accountType: typeof AccountTypes.values[number] = AccountTypes.values[0]

  @action
  toggleType = (index: number) => {
    let type = AccountTypes.values[index]
    if(type) {
      console.log(type)
      return this.accountType = {...type}
      
    }
  }

  // autorun = (() => {
  //   console.log('delay is', this.accountType);
  // })
}



export default new SwitchAccountStore()