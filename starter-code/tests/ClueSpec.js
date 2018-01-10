/* eslint no-undef: "off" */
/* eslint jasmine/no-spec-dupes: "off" */

describe('randomSelector()', function () {

  it('should be a function', function () {
    expect(typeof randomSelector).toBe('function');
  });

  describe('given an empty array', function () {

    it('should return undefined', function () {
      var array = [];
      var result = randomSelector(array);
      expect(result).toBe(undefined);
    });
  });

  describe('given an array with a single element', function () {

    it('should return that element', function () {
      var array = ['ab'];
      var result = randomSelector(array);
      expect(result).toBe('ab');
    });
  });

  describe('given an array with many elements', function () {

    beforeEach(function () {
      this.spy = spyOn(Math, 'random');
      this.array = ['a', 'ab', 'abb', 'aab', 'aaa', 'sda', 'kas'];
    });

    it('should be able to return the first element', function () {
      this.spy.and.returnValue(0.1);
      var result = randomSelector(this.array);
      expect(result).toEqual('a');
    });

    it('should be able to return an element in the middle', function () {
      this.spy.and.returnValue(0.5);
      var result = randomSelector(this.array);
      expect(result).toEqual('aab');
    });

    it('should be able to return the last element', function () {
      this.spy.and.returnValue(0.9);
      var result = randomSelector(this.array);
      expect(result).toEqual('kas');
    });

  });
});

describe('pickMistery()', function () {

  it('should be a function', function () {
    expect(typeof pickMistery).toBe('function');
  });

  it('should return an array', function () {
    expect(typeof pickMistery()).toEqual('object');
    expect(typeof pickMistery().pop).toBe('function');
  });

  it('should return a non empty array', function () {
    var result = pickMistery();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return an array with 3 elements', function () {
    var result = pickMistery();
    expect(result.length).toEqual(3);
  });

  it('should return a killer on the first index of the array', function () {
    var result = pickMistery();
    expect(charactersArray.indexOf(result[0])).toBeGreaterThan(-1);
  });

  it('should return a weapon on the second index of the array', function () {
    var result = pickMistery();
    expect(weaponsArray.indexOf(result[1])).toBeGreaterThan(-1);
  });

  it('should return a room in the third index of the array', function () {
    var result = pickMistery();
    expect(roomsArray.indexOf(result[2])).toBeGreaterThan(-1);
  });
});

describe('revealMistery()', function () {

  it('should be a function', function () {
    expect(typeof revealMistery).toBe('function');
  });

  it('should return a string', function () {
    var data = [{
      first_name: 'aa',
      last_name: 'abc'
    }, {
      name: 'abd'
    }, {
      name: 'abb'
    }];
    var result = revealMistery(data);
    expect(typeof result).toEqual('string');
  });

  it('should return <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!', function () {
    var data = [{
      first_name: 'Victor',
      last_name: 'Plum'
    }, {
      name: 'poison'
    }, {
      name: 'Billiard Room'
    }];
    var result = revealMistery(data);
    expect(result).toEqual('Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!');
  });
});
