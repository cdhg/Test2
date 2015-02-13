Parse.initialize("DTlgg5qm0fyJxShtYY2RzjX62KgO7jcx4Y3fUV8S", "GYABuByO1Kg8wx8isoHAKPixxzpJLlLtDkx37zhE");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
var form = document.forms[0]
var firstName = form.elements[0]
var lastName = form.elements[1]
var email = form.elements[2]

testObject.save({foo: "bar"}).then(function(object) {
  alert(firstName);
});
