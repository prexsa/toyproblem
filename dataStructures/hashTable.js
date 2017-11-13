// Hash function
// lose lose Hash Function
// methods: put(key, value), remove(key), get(key)

function HashTable() {
  let table = [];

  // hash function: private method
  let loseloseHashCode = function(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  // a better hash function than loseloseHashCode
  let djb2HashCode = function(key) {
    let hash = 5381;
    for(let i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  }

  this.put = function(key, value) {
    let position = loseloseHashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };

  this.get = function(key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined
  };

  this.print = function() {
    for(let i = 0;i < table.length; i++) {
      if(table[i] !== undefined) {
        console.log(i + ': ' + table[i]);
      }
    }
  };

  // Dealing with collision; type of methods: separate chaining, linear probing
  
  // Helper function
  let ValuePair = function(key, value) {
    this.key = key;
    this.value = value;

    this.toString = function() {
      return "[" + this.key + ' - ' + this.value + ']';
    }
  };

  // Separate chaining method: 
  this.putSC = function(key, value) {
    let position = loseloseHashCode(key);

    if(table[position] == undefined) {
      table[position] = new LinkedList();
    }
    table[position].append( new ValuePair(key, value));
  };

  this.getSC = function(key) {
    let position = loseloseHashCode(key);

    if(table[position] !== undefined) {
      let current = table[position].getHead();

      while(current.next) {
        if(current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }

      if(current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  };

  this.removeSC = function(key) {
    let position = loseloseHashCode(key);

    if(table[position] !== undefined) {
      let current = table[position].getHead();
      while(current.next) {
        if(current.element.key === key) {
          table[position].remove(current.element);
          if(table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }

      if(current.element.key === key) {
        table[position].remove(current.element);
        if(table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  };

}



// Testing
let hash = new HashTable();
hash.put('Bankai', 'level 2');
hash.put('Exia', 'Mech');
hash.put('Machine Learning', 'Next Task');