class HashMap {
  constructor() {
    this.map = new Map();
  }

  put(key, value) {
    this.map.set(key, value);
  }

  get(key) {
    return this.map.get(key);
  }

  remove(key) {
    this.map.delete(key);
  }
}

const myHashMap = new HashMap();
myHashMap.put("name", "Rajat Parihar");
myHashMap.put("age", 19);

console.log(myHashMap.get("name"));
myHashMap.remove("age");
