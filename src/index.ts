class Person {
  // ts 4.0 之前如果没有赋初值 , 就给 undefined,  public name: string | undefined;
  public name: string;
  public age: number;
  public phone: string;
  constructor(name_: string, age_: number, phone_: string) {
    this.name = name_;
    this.age = age_;
    this.phone = phone_;
  }

  public sayHello(): void {
    console.log('hello');
  }

  public doEat(who: string, address: string): void {
    console.log(`${this.name} eat with ${who} at ${address}`);
  }
}
// 创建对象  new Person() 会做三件事情
// 1.  在堆中为类的某个对象【实例】 分配内存空间
// 2.  调用类的构造函数 【构造器】，初始化对象
// 3.  返回对象的地址给对象的引用 = 对象的引用指向对象的地址 = zuo 指向 Person 的实例

let zuo = new Person('zuo', 18, '123456');

zuo.sayHello();

zuo.doEat('zhou', 'shanghai');