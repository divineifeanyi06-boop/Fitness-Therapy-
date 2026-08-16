import { Specialization, Testimonial, ProgramFeature } from '../types';

export const DEFAULT_GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbye7cGVr6NsAaKeqyNMmCpkOekePEmN93sTD8fnJRqxTqKUyvcF3ZRiMCpMgTTnKXa8/exec";

export const BUSINESS_INFO = {
  name: "Ifeanyi's Health Fitness Therapy",
  tagline: "Empowering Your Body, Rebuilding Your Health & Transforming Your Lifestyle",
  subTagline: "Expert 1-on-1 & Group Personal Fitness Coaching, Athletic Therapy, and Sustainable Nigerian Nutrition Planning.",
  phone: "+2349060710687",
  formattedPhone: "+234 906 071 0687",
  email: "divineifeanyi06@gmail.com",
  whatsappNumber: "2349060710687",
  location: "Agbor, Delta State, Nigeria",
  locations: ["Agbor, Delta State, Nigeria", "Global Virtual Coaching"],
  programDuration: "5 Months",
  programFee: "₦50,000",
  programFeeNumeric: 50000,
  currencySymbol: "₦",
};

export const SPECIALIZATIONS: Specialization[] = [
  {
    id: "strength-training",
    title: "Strength Training",
    description: "Build lean muscle mass, increase bone density, and improve physical power using progressive resistance techniques.",
    iconName: "Dumbbell",
    benefits: ["Increased muscle tone", "Higher metabolism", "Improved joint stability"],
    recommendedFor: "Anyone looking to tone up, build strength, and sculpt an athletic physique."
  },
  {
    id: "cardio-endurance",
    title: "Cardio & Endurance Training",
    description: "Boost cardiovascular health, lung capacity, and stamina with tailored aerobic exercises.",
    iconName: "HeartPulse",
    benefits: ["Lower resting heart rate", "Enhanced daily stamina", "Lower blood pressure"],
    recommendedFor: "Clients wanting better stamina, heart health, and high-energy vitality."
  },
  {
    id: "weight-loss",
    title: "Weight Loss / Fat Burn Programs",
    description: "Target stubborn body fat through high-metabolic conditioning and sustainable calorie deficit strategies.",
    iconName: "Flame",
    benefits: ["Targeted visceral fat loss", "Preserved lean muscle", "Increased calorie burn"],
    recommendedFor: "Individuals aiming for steady, healthy weight loss without extreme starvation diets."
  },
  {
    id: "yoga-flexibility",
    title: "Yoga & Flexibility Training",
    description: "Enhance range of motion, alleviate stiffness, improve posture, and cultivate deep mind-body alignment.",
    iconName: "Sun",
    benefits: ["Reduced joint stiffness", "Stress relief & balance", "Improved posture"],
    recommendedFor: "People experiencing muscle tightness, back strain, or needing active recovery."
  },
  {
    id: "hiit-training",
    title: "HIIT (High-Intensity Interval Training)",
    description: "Maximize fat loss and aerobic capacity in short, explosive burst workouts with minimal equipment.",
    iconName: "Zap",
    benefits: ["Afterburn effect (EPOC)", "Time-efficient sessions", "Rapid fitness gains"],
    recommendedFor: "Busy professionals seeking maximum workout efficiency in limited time."
  },
  {
    id: "core-abs",
    title: "Core & Abs Conditioning",
    description: "Fortify deep abdominal walls, obliques, and lower back stability for enhanced athletic balance.",
    iconName: "ShieldCheck",
    benefits: ["Sculpted waistline", "Reduced back pain", "Improved stability & lift safety"],
    recommendedFor: "Anyone aiming for a strong midsection, flat stomach, and spinal protection."
  },
  {
    id: "functional-mobility",
    title: "Functional / Mobility Training",
    description: "Correct postural imbalances, rehabilitate prior injuries, and move pain-free in everyday life.",
    iconName: "Activity",
    benefits: ["Injury prevention", "Seamless daily movement", "Joint longevity"],
    recommendedFor: "People recovering from posture strain, desk work tightness, or athletic fatigue."
  },
  {
    id: "nutrition-coaching",
    title: "Personalized Nutrition Coaching",
    description: "Tailored dietary advice using enjoyable, accessible Nigerian food staples like plantains, fish, and soups.",
    iconName: "Apple",
    benefits: ["No extreme starvation", "Macro & calorie clarity", "Sustainable food habits"],
    recommendedFor: "Clients who struggle with meal planning, portion control, or realistic dieting."
  }
];

export const PROGRAM_INCLUSIONS: ProgramFeature[] = [
  {
    title: "Customized 5-Month Workout Roadmap",
    description: "Structured workout routines tailored to your fitness level, goals, available equipment, and schedule.",
    iconName: "Calendar"
  },
  {
    title: "Weekly 1-on-1 Accountability Check-Ins",
    description: "Personal review of your form, weight progress, energy levels, and routine adjustments.",
    iconName: "Users"
  },
  {
    title: "Nigerian-Friendly Meal & Macro Guide",
    description: "Practical dietary strategies incorporating delicious local meals without strict restrictions.",
    iconName: "Utensils"
  },
  {
    title: "Direct 24/7 WhatsApp Coaching Access",
    description: "Get quick answers, form correction videos, and daily motivation direct from Coach Ifeanyi.",
    iconName: "MessageCircle"
  },
  {
    title: "Body Metrics & Transformation Tracking",
    description: "Comprehensive progress logs measuring waist inches, body fat percentage, and muscle endurance.",
    iconName: "TrendingUp"
  },
  {
    title: "Injury Therapy & Posture Correction",
    description: "Therapeutic movement strategies designed to alleviate back pain, knee pain, and shoulder tightness.",
    iconName: "Shield"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Chidi Okafor",
    location: "Lagos, Nigeria",
    rating: 5,
    comment: "I dropped 12kg in the 5-month program and completely eliminated my chronic lower back stiffness! Coach Ifeanyi's functional therapy and strength guidance were a game changer for me.",
    achievement: "Lost 12kg & Pain-Free Mobility"
  },
  {
    id: "t2",
    name: "Amaka Kalu",
    location: "Abuja, Nigeria",
    rating: 5,
    comment: "The nutrition plan was so easy to follow because it included normal Nigerian food! I finally formed healthy habits that I can stick with for life. Best ₦50,000 investment ever.",
    achievement: "Toned Core & Sustainable Diet"
  },
  {
    id: "t3",
    name: "Babatunde Adebayo",
    location: "Port Harcourt, Nigeria",
    rating: 5,
    comment: "Ifeanyi's HIIT and strength sessions pushed my stamina to levels I didn't think were possible at 42. He is patient, professional, and holds you accountable every single day.",
    achievement: "Increased Endurance & Muscle Tone"
  }
];

export const APPS_SCRIPT_TEMPLATE = `
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};
    
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }
    
    // Create header row if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Email",
        "Phone Number",
        "Home Address",
        "Preferred Activities",
        "Why Prefer This",
        "Expectations / Goals"
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#c2f970");
      headerRange.setFontColor("#000000");
    }
    
    // Format activities
    var activities = "";
    if (Array.isArray(data.preferredActivities)) {
      activities = data.preferredActivities.join(", ");
    } else if (data.preferredActivities) {
      activities = String(data.preferredActivities);
    }
    
    // Append the client's information into the spreadsheet
    sheet.appendRow([
      new Date(),
      data.fullName || "",
      data.email || "",
      data.phone || "",
      data.homeAddress || "",
      activities,
      data.whyPrefer || "",
      data.expectation || ""
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ "status": "online", "message": "Ifeanyi Fitness Therapy Webhook is active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
`.trim();
