// add variable

let qoute = document.querySelector("p");
let nextQoute = document.querySelector("button");

// add lofic means make function
let quotations = [
  "Practice makes men perfect — consistency is the real key to mastery.",
  "Never give up, because great things take time and effort.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Stay strong even when the road gets tough — that’s how growth happens.",
  "Dream big, because small dreams don’t inspire the soul.",
  "Be yourself — everyone else is already taken.",
  "Keep going, even if progress feels slow. It's still progress.",
  "Think positive — your mindset shapes your reality.",
  "Stay focused on your goal, not the noise around you.",
  "Work in silence, let your results make the noise.",
  "Push your limits — that’s where magic happens.",
  "Success takes time — don’t rush the process.",
  "Every step counts — no matter how small it feels.",
  "Start today — someday is not a real day.",
  "Believe in yourself even when no one else does.",
  "Learn from failure — it's a step toward success.",
  "You can do it — everything starts with believing you can.",
  "Stay humble, no matter how high you go.",
  "Be consistent — motivation fades, habits stay.",
  "One day at a time — that’s how progress is made.",
  "Don’t stop trying — the next attempt could be the one.",
  "Focus on growth, not on perfection.",
  "Make it happen — stop waiting for the perfect time.",
  "Small wins lead to big victories.",
  "Do your best, and let that be enough for today.",
  "Take the risk — regret is worse than failure.",
  "Trust the process, even when the results are not instant.",
  "Stay patient — good things take time and effort.",
  "Act with purpose — don’t just move, move with meaning.",
  "Keep it simple — simplicity is powerful.",
  "Discipline beats motivation every single time.",
  "Fear is temporary — but regret can last forever.",
  "Winners are just dreamers who never gave up.",
  "Challenge yourself — comfort zones kill growth.",
  "You are enough — exactly as you are.",
  "Be better than you were yesterday, even just a little.",
  "Keep moving forward — no matter how slow it feels.",
  "Action brings results — not just thinking or planning.",
  "Success is earned — not given.",
  "Hustle quietly — your success will speak for itself.",
  "Mindset is everything — protect it like treasure.",
  "Strive for progress, not perfection.",
  "Failure is not the end — it’s part of the path.",
  "Focus and finish — don’t leave things half done.",
  "Grow through what you go through.",
  "Start small — but start now.",
  "Work beats talent when talent is lazy.",
  "Be the change you want to see in the world.",
  "Energy is contagious — protect yours.",
  "Stay in your lane — comparison kills joy.",
  "A little progress each day adds up to big results.",
  "Confidence comes from preparation.",
  "What you do daily shapes your future.",
  "Don’t let fear stop your potential.",
  "Turn your pain into purpose.",
  "Consistency over intensity — slow and steady wins.",
  "Discomfort is a sign of growth.",
  "The secret to getting ahead is getting started.",
  "Your only limit is your own belief.",
  "Every expert was once a beginner — just like you."
];

  


function qouteGenerator(){
    let randomIndex = Math.floor(Math.random() * quotations.length);
    qoute.innerHTML = quotations[randomIndex];

};



// make eventlistener

nextQoute.addEventListener("click", qouteGenerator);