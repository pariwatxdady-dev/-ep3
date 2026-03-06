const topics = [

{
title:"คอมพิวเตอร์",
content:`

<img class="topic-img" src="https://images.unsplash.com/photo-1518770660439-4636190af475">

<h3>คอมพิวเตอร์คืออะไร</h3>
<p>คอมพิวเตอร์คืออุปกรณ์ที่ใช้รับข้อมูล ประมวลผล และแสดงผล</p>

<ul>
<li>CPU หน่วยประมวลผล</li>
<li>RAM หน่วยความจำ</li>
<li>Storage เก็บข้อมูล</li>
<li>Input / Output</li>
</ul>

`
},

{
title:"อินเทอร์เน็ต",
content:`

<img class="topic-img" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231">

<h3>อินเทอร์เน็ต</h3>
<p>เครือข่ายที่เชื่อมต่อคอมพิวเตอร์ทั่วโลก</p>

<ul>
<li>เว็บไซต์</li>
<li>อีเมล</li>
<li>โซเชียลมีเดีย</li>
<li>Cloud</li>
</ul>

`
},

{
title:"AI",
content:`

<img class="topic-img" src="https://images.unsplash.com/photo-1677442136019-21780ecad995">

<h3>Artificial Intelligence</h3>
<p>เทคโนโลยีที่ทำให้คอมพิวเตอร์สามารถเรียนรู้และตัดสินใจได้</p>

<ul>
<li>Chatbot</li>
<li>Face Recognition</li>
<li>Self Driving Car</li>
</ul>

`
}

];

function showContent(index){

document.getElementById("contentBox").innerHTML = `

<h2>${topics[index].title}</h2>
${topics[index].content}
`;

}
