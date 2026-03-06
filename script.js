const topics = [

{
title:"คอมพิวเตอร์",
content:`

<img class="topic-img" src="images/computer.jpg">

<h3>คอมพิวเตอร์คืออะไร</h3>
<p>คอมพิวเตอร์คืออุปกรณ์ที่ใช้รับข้อมูลและประมวลผล</p>

<ul>
<li>CPU</li>
<li>RAM</li>
<li>Storage</li>
</ul>

<h3>ตัวอย่าง</h3>

<div class="example-box">
<img src="examples/computer-example.jpg">
<p>ตัวอย่างคอมพิวเตอร์ตั้งโต๊ะ</p>
</div>

`
},

{
title:"อินเทอร์เน็ต",
content:`

<img class="topic-img" src="images/internet.jpg">

<h3>อินเทอร์เน็ต</h3>
<p>เครือข่ายที่เชื่อมต่อคอมพิวเตอร์ทั่วโลก</p>

<ul>
<li>เว็บไซต์</li>
<li>อีเมล</li>
<li>โซเชียลมีเดีย</li>
</ul>

<h3>ตัวอย่าง</h3>

<div class="example-box">
<img src="examples/internet-example.jpg">
<p>ตัวอย่างการใช้งานอินเทอร์เน็ต</p>
</div>

`
}

];

function showContent(index){

document.getElementById("contentBox").innerHTML=`

<h2>${topics[index].title}</h2>
${topics[index].content}
`

}
