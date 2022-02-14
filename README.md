<h1 style="color:blue">A meditation application with extensive features!</h1>

<h2> Features</h2>
<ul>
 <li>Listen to Meditations</li>
   <li>Track your Mood/ Mood swings</li>
   <li>Create a Journal</li>
 </ul>

<br></br>
<h2> Meditations </h2>
<h4>Choose your meditation and meditate</h4>

Choose a Meditation Course |  Choose a Meditation      |  Listen to the Meditation |  
:-------------------------:|:-------------------------:|:-------------------------:|
<image src='src/images/docImages/choose_meditation_course.png'  width=250 height=400 /> |  <image src='src/images/docImages/meditation_web_app_fs_photo.png'  width=250 height=400 /> |  <image src='src/images/docImages/individual_meditation.png'  width=250 height=400 />  | 



<br></br>
<h2> Mood Tracking and Journaling </h2>

<h4>Track your Moods and Journal to better understand your mental health</h4>

Mood Data            |  
:-------------------------:|
<image src='src/images/docImages/meditation_web_app_journal_photo.png'  width=250 height=400 />  

<h4>Read Past Journals</h4>
<image src='src/images/docImages/all_journals.png'  width=250 height=400 />

<h4>Track your monthly and weekly Mood changes</h4>

Monthly Moods              |  
:-------------------------:|
<image src='src/images/docImages/journal_data.png'  width=250 height=400 />  


<br></br>
<h2> Technologies Used </h2>
<h6> Front End </h6>
<ul>
 <li>Angular</li>
 <li>TypeScript</li>
 <li>Sass</li>
 </ul>
 
 <h6> Back End </h6>
<ul>
 <li>Django/Python</li>
 <li>Django REST Framework</li>
  <li>PostgresSQL</li>
 </ul>
 
 <h3>How to start the app with dockerfile</h3>
 <p>$  docker build -t meditation_fe . </p>
 <p>$  docker run -p 4200:4200 meditation_fe </p>

 <h3>How to start the app with docker-compose</h3>
 <p>$ docker-compose build </p>
 <p>$ docker-compose up   </p>

