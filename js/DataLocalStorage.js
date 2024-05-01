class DataLocalStorage {

  addData(data, key) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  toggleObj(obj, key) {
    let data = this.getData(key);
    const isObj = data.find((objEl) => objEl.id === obj.id);
    if (isObj) {
      this.deleteObj(obj.id, key);
      return 'deleted';
    } else {
      data.push(obj);
      this.addData(data, key);
      return 'added';
    }
  }

  getData(key) {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  deleteObj(id, key) {
    const newClearData = this.getData(key)?.filter((obj) => obj.id !== id);
    this.addData(newClearData, key);
  }
}

const dataLocalStorage = new DataLocalStorage();
