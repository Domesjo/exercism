
export default class School {
  constructor(){
    this.students = {};
    this.names = [];
  }

  add(name, score) {
    this.names.push(name);
    if(Object.keys(this.students).includes(score.toString())){
      this.students[score.toString()].push(name);
      return this.students[score.toString()].sort();
    } else {
      this.students[score]= [name];
    }
  }

  roster() {
    return JSON.parse(JSON.stringify(this.students))
  }
  grade(int) {
    if(!this.students[int]) return [];
    return JSON.parse(JSON.stringify(this.students[int].sort())) || [];
  }
}
