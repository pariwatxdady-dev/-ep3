const topics = [

{
title:"คอมพิวเตอร์",
content:`

<h3>คอมพิวเตอร์คืออะไร</h3>
<p>คอมพิวเตอร์คืออุปกรณ์ที่ใช้ประมวลผลข้อมูลตามคำสั่ง</p>

<ul>
<li>CPU</li>
<li>RAM</li>
<li>Storage</li>
<li>Input / Output</li>
</ul>
`
},

{
title:"อินเทอร์เน็ต",
content:`

<h3>อินเทอร์เน็ต</h3>
<p>เครือข่ายที่เชื่อมต่อคอมพิวเตอร์ทั่วโลก</p>

<ul>
<li>เว็บไซต์</li>
<li>อีเมล</li>
<li>Cloud</li>
<li>Video call</li>
</ul>
`
},

{
title:"Cyber Security",
content:`

<h3>ความปลอดภัยไซเบอร์</h3>
<p>การป้องกันข้อมูลจากการโจมตีทางอินเทอร์เน็ต</p>

<ul>
<li>Virus</li>
<li>Malware</li>
<li>Phishing</li>
<li>Ransomware</li>
</ul>
`
},

{
title:"AI",
content:`

<h3>Artificial Intelligence</h3>
<p>เทคโนโลยีที่ทำให้คอมพิวเตอร์เรียนรู้และตัดสินใจได้</p>

<ul>
<li>Chatbot</li>
<li>Face recognition</li>
<li>Self-driving car</li>
</ul>
`
},

{
title:"Programming",
content:`

<h3>การเขียนโปรแกรม</h3>
<p>การเขียนคำสั่งให้คอมพิวเตอร์ทำงาน</p>

<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>Python</li>
</ul>
`
},

{
title:"Social Media",
content:`

<h3>โซเชียลมีเดีย</h3>
<p>แพลตฟอร์มสำหรับการสื่อสารและแบ่งปันข้อมูล</p>

<ul>
<li>Facebook</li>
<li>Instagram</li>
<li>TikTok</li>
<li>YouTube</li>
</ul>
`
}

]

function showContent(index){

document.getElementById("contentBox").innerHTML=`

<h2>${topics[index].title}</h2>

${topics[index].content}

`
}
