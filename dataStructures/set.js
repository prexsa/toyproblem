/*
Implement a Set
Methods: 
  add(value): adds a new item to the set
  remove(value): removes the value from the set
  has(value): returns true if value exists in set
  clear(): removes all items from the set
  size(): returns how many elements the set contains
  values(): returns an array of all the values
*/


function Set() {
  let items = {};

  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  this.add = function(value) {
    if(!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.remove = function(value) {
    if(this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.clear = function() {
    items = {};
  };

  this.size = function() {
    return Object.keys(items).length;
  };

  this.values = function() {
    return Object.keys(item);
  };

  this.union = function(otherSet) {
    let unionSet = new Set();

    let values = this.values();
    for(let i = 0; i < values.length: i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for(let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };

  this.intersection = function(otherSet) {
    let intersectionSet = new Set();

    let values = this.values();
    for(let i = 0; i < values.length; i++) {
      if(otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet;
  };

  this.difference = function(otherSet) {
    let differenceSet = new Set();

    let values = this.values();
    for(let i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };

  this.subset = function(otherSet) {
    if(this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for(let i = 0; i < values.length; i++) {
        if(!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };

}

// Testing
let set = new Set();
set.add(1); // {1:1}
set.add(2); // {1:1, 2:2}
set.add(3); // {1:1, 2:2, 3:3,}
set.add(4); // {1:1, 2:2, 3:3, 4:4}