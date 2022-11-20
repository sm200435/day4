## 1.为什么要有this

- 在常见的编程语言中，几乎都有this这个关键字（Objective-C中使用的是self），但是JavaScript中的this和常见的面向对象语言中的this不太一样：
  - 常见面向对象的编程语言中，比如Java、C++、Swift、Dart等等一系列语言中，this通常只会出现在类的方法中。
  - 也就是你需要有一个类，类中的方法（特别是实例方法）中，this代表的是当前调用对象。
  - 但是JavaScript中的this更加灵活，无论是它出现的位置还是它代表的含义。

## 2.this的绑定规则

```
this的绑定和定义的位置（编写的位置）没有关系；

this的绑定和调用方式以及调用的位置有关系；
```

- 绑定一：默认绑定；

  - 独立的函数调用，我们可以理解成函数没有被绑定到某个对象上进行调用；（this指向window）

    ```javascript
     // 1.案例一:
    function foo() {
      console.log(this)
     }
     foo()//window
    
    // 2.案例二:
     function foo1() {
       console.log(this)
     }
    
     function foo2() {
       console.log(this)
       foo1()
     }
    
     function foo3() {
       console.log(this)
       foo2()
     }
    
     foo3()//window  window window
    
    
    // 3.案例三:
     var obj = {
       name: "why",
       foo: function() {
         console.log(this)
       }
     }
    
     var bar = obj.foo
     bar() // window
    
    
    // 4.案例四:
     function foo() {
       console.log(this)
     }
     var obj = {
       name: "why",
       foo: foo
     }
    
     var bar = obj.foo
     bar() // window
    ```

- 绑定二：隐式绑定；

  - 也就是它的调用位置中，是通过某个对象发起的函数调用(谁调用this指向谁)

    ```javascript
    //1.案例一:
    var obj = {
      name: "why",
      foo: foo
    }
    
    obj.foo() // obj对象
    
    //2.案例二:
    var obj = {
      name: "why",
      eating: function() {
        console.log(this.name + "在吃东西")
      },
      running: function() {
        console.log(obj.name + "在跑步")
      }
    }
    
    // obj.eating()
    // obj.running()
    
    var fn = obj.eating
    fn()
    
    
    // 3.案例三:
      var obj1 = {
        name: "obj1",
        foo: function() {
          console.log(this)
        }
      }
    
      var obj2 = {
        name: "obj2",
        bar: obj1.foo
      }
    
      obj2.bar()
    ```

- 绑定三：显示绑定；

  - 必须在调用的对象内部有一个对函数的引用（比如一个属性）；
  - 如果没有这样的引用，在进行调用时，会报找不到该函数的错误；
  - 正是通过这个引用，间接的将this绑定到了这个对象上

  ```javascript
  // 1.foo直接调用和call/apply调用的不同在于this绑定的不同
  // foo直接调用指向的是全局对象(window)
  // foo()
  
  var obj = {
    name: "obj"
  }
  
  // call/apply是可以指定this的绑定对象
  foo.call(obj)
  foo.apply(obj)
  foo.apply("aaaa")
  
  
  // 2.call和apply有什么区别?
  function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3, this)
  }
  
  sum.call("call", 20, 30, 40)
  sum.apply("apply", [20, 30, 40])
  
  // 3.call和apply在执行函数时,是可以明确的绑定this, 这个绑定规则称之为显示绑定
  ```

- 绑定四：new关键字

​       指向实例话对象（除非构造函数返回一个引用类型，则new失效。this指针绑定变为返回的引用类型）、

​       new都干了些什么？      

```
    创建一个空对象；

　　将空对象的原型，指向于构造函数的原型；

　　将空对象作为构造函数的上下文（改变this指向）；

　　对有返回值的构造函数做判断处理
```

- 绑定五：箭头函数的绑定

​       箭头函数就比较特殊了，他没有明确的指向，他里面的 this 其实是根据他的上级来定的，也就是他的 this 指向等于他的上级。

  

```
  var func = () => {
          console.log(this);
        };
        var obj = {
          ber: func,
        };
        obj.ber(); //window

        var o = {
          a: 10,
          b: {
            a: 12,
            fn: function () {
              console.log(this.a);
            },
          },
        };
        o.b.fn(); //b
```

## 优先级

箭头函数、new、bind、apply 和 call、欧比届点（obj.）、直接调用。

