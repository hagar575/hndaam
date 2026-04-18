const { createClient } = supabase

const supabaseUrl = 'https://gyzyilpzjalkustowzgp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5enlpbHB6amFsa3VzdG93emdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MTM1MjYsImV4cCI6MjA5MTk4OTUyNn0.LJfgSKEsx1mYfuVEhinZHJYxCLlemCHrChMgwVdbZWQ'
const client = createClient(supabaseUrl, supabaseKey)

const translations = {
  english: {
    information: 'Information',
    master: 'Master',
    tailor: 'Tailor',
    trial: 'Trial',
    repair: 'Repair',
    fullOrder: 'Full Order',
    date: 'Date:',
    clientName: 'Client Name:',
    clientNumber: 'Client Number:',
    clientAddress: 'Client Address:',
    tailored: 'Tailored',
    bespoke: 'Bespoke',
    signature: 'Signature',
    embroidery: 'Embroidery',
    quantity: 'Quantity:',
    weight: 'Weight:',
    garments: 'Garments:',
    fabric: 'Fabric:',
    inhouse: 'Inhouse',
    outsource: 'Outsource',
    dishdasha: 'Dishdasha',
    dagla: 'Dagla',
    vest: 'Vest',
    shirt: 'Shirt',
    pants: 'Pants',
    socks: 'Socks',
    ghutra: 'Ghutra',
    chemagh: 'Chemagh',
    reset: 'Reset',
    measurements: 'Measurements',
    length: 'Length',
    shoulder: 'Shoulder',
    sleeves: 'Sleeves',
    chest: 'Chest',
    halfChest: 'Half Chest',
    bottom: 'Bottom',
    hemFold: 'Hem Fold',
    styleOptions: 'Style Options',
    collarStyle: 'Collar Style',
    standUpCollar: 'Stand-up Collar',
    collarless: 'Collarless',
    shirtCollar: 'Shirt Collar',
    roundedStandUpCollar: 'Rounded Stand-up Collar',
    sidePocket: 'Side Pocket',
    none: 'None',
    single: 'Single',
    double: 'Double',
    chestStrip: 'Chest Strip',
    frontPocket: 'Front Pocket',
    angledBottom: 'Angled Bottom',
    roundedBottom: 'Rounded Bottom',
    cuffStyle: 'Cuff Style',
    squareCuff: 'Square Cuff',
    roundedCuff: 'Rounded Cuff',
    angledCuff: 'Angled Cuff',
    frenchCuff: 'French Cuff',
    button: 'Button',
    stitchButton: 'Stitch Button',
    regularButton: 'Regular Button',
    logo: 'Button with logo',
    zip: 'Zip',
    stitching: 'Stitching',
    sideLine: 'Side Line',
    threadColor: 'Thread Color',
    extras: 'Extras',
    one: 'One',
    two: 'Two',
    visit: 'Visit',
    delivery: 'Delivery',
    dryClean: 'Dry Clean',
    soaking: 'Soaking',
    laundry: 'Laundry',
    firstPiece: 'First Piece',
    dueDate: 'Due Date',
    remarks: 'Remarks',
    submitOrder: 'Submit Order'
  },
  arabic: {
    information: 'معلومات',
    master: 'ماستر',
    tailor: 'خياط',
    trial: 'تجربة',
    repair: 'إصلاح',
    fullOrder: 'طلب كامل',
    date: 'التاريخ:',
    clientName: 'اسم العميل:',
    clientNumber: 'رقم العميل:',
    clientAddress: 'عنوان العميل:',
    tailored: 'مفصل',
    bespoke: 'حسب الطلب',
    signature: 'توقيع',
    embroidery: 'تطريز',
    quantity: 'الكمية:',
    weight: 'الوزن:',
    garments: 'الملابس:',
    fabric: 'القماش:',
    inhouse: 'داخلي',
    outsource: 'خارجي',
    dishdasha: 'دشداشة',
    dagla: 'دغلا',
    vest: 'صدرية',
    shirt: 'قميص',
    pants: 'بنطالون',
    socks: 'جوارب',
    ghutra: 'غترة',
    chemagh: 'شماغ',
    reset: 'إعادة ضبط',
    measurements: 'القياسات',
    length: 'الطول',
    shoulder: 'الكتف',
    sleeves: 'الأكمام',
    chest: 'الصدر',
    halfChest: 'نصف الصدر',
    bottom: 'الأسفل',
    hemFold: 'طية الحاشية',
    styleOptions: 'خيارات النمط',
    collarStyle: 'نمط الياقة',
    standUpCollar: 'ياقة قائمة',
    collarless: 'بدون ياقة',
    shirtCollar: 'ياقة قميص',
    roundedStandUpCollar: 'ياقة قائمة دائرية',
    sidePocket: 'جيب جانبي',
    none: 'لا شيء',
    single: 'مفرد',
    double: 'مزدوج',
    chestStrip: 'شريط الصدر',
    frontPocket: 'جيب أمامي',
    angledBottom: 'أسفل مائل',
    roundedBottom: 'أسفل مدور',
    cuffStyle: 'نمط الكفة',
    squareCuff: 'كفة مربعة',
    roundedCuff: 'كفة مدورة',
    angledCuff: 'كفة مائلة',
    frenchCuff: 'كفة فرنسية',
    button: 'زر',
    stitchButton: 'زر مخيط',
    regularButton: 'زر عادي',
    logo: 'زر بشعار',
    zip: 'سحاب',
    stitching: 'خياطة',
    sideLine: 'خط جانبي',
    threadColor: 'لون الخيط',
    extras: 'إضافات',
    one: 'واحد',
    two: 'اثنان',
    visit: 'زيارة',
    delivery: 'توصيل',
    dryClean: 'تنظيف جاف',
    soaking: 'نقع',
    laundry: 'غسيل',
    firstPiece: 'القطعة الأولى',
    dueDate: 'تاريخ الاستحقاق',
    remarks: 'ملاحظات',
    submitOrder: 'إرسال الطلب'
  },
  urdu: {
    information: 'معلومات',
    master: 'ماسٹر',
    tailor: 'درزی',
    trial: 'آزمائش',
    repair: 'مرمت',
    fullOrder: 'مکمل آرڈر',
    date: 'تاریخ:',
    clientName: 'کلائنٹ کا نام:',
    clientNumber: 'کلائنٹ نمبر:',
    clientAddress: 'کلائنٹ پتہ:',
    tailored: 'تیار شدہ',
    bespoke: 'حسب ضرورت',
    signature: 'دستخط',
    embroidery: 'کشیدہ کاری',
    quantity: 'مقدار:',
    weight: 'وزن:',
    garments: 'کپڑے:',
    fabric: 'کپڑا:',
    inhouse: 'اندرونی',
    outsource: 'آؤٹ سورس',
    dishdasha: 'دشداشا',
    dagla: 'ڈگلا',
    vest: 'واسکٹ',
    shirt: 'قمیض',
    pants: 'پتلون',
    socks: 'موزے',
    ghutra: 'گھترہ',
    chemagh: 'چماغ',
    reset: 'دوبارہ ترتیب دیں',
    measurements: 'پیمائشیں',
    length: 'لمبائی',
    shoulder: 'کندھا',
    sleeves: 'آستین',
    chest: 'سینہ',
    halfChest: 'نصف سینہ',
    bottom: 'نیچے',
    hemFold: 'حاشیے کی تہ',
    styleOptions: 'اسٹائل کے اختیارات',
    collarStyle: 'کالر اسٹائل',
    standUpCollar: 'کھڑا کالر',
    collarless: 'بغیر کالر',
    shirtCollar: 'قمیض کا کالر',
    roundedStandUpCollar: 'گول کھڑا کالر',
    sidePocket: 'سائیڈ جیب',
    none: 'کوئی نہیں',
    single: 'واحد',
    double: 'ڈبل',
    chestStrip: 'سینہ کی پٹی',
    frontPocket: 'سامنے کی جیب',
    angledBottom: 'زاویہ دار نیچے',
    roundedBottom: 'گول نیچے',
    cuffStyle: 'کف کا انداز',
    squareCuff: 'مربع کف',
    roundedCuff: 'گول کف',
    angledCuff: 'زاویہ دار کف',
    frenchCuff: 'فرنچ کف',
    button: 'بٹن',
    stitchButton: 'سلائی شدہ بٹن',
    regularButton: 'معمول کا بٹن',
    logo: 'لوگو کے ساتھ بٹن',
    zip: 'زپ',
    stitching: 'سلائی',
    sideLine: 'سائیڈ لائن',
    threadColor: 'دھاگے کا رنگ',
    extras: 'اضافی',
    one: 'ایک',
    two: 'دو',
    visit: 'وزٹ',
    delivery: 'ترسیل',
    dryClean: 'ڈرائی کلین',
    soaking: 'بھگونا',
    laundry: 'لانڈری',
    firstPiece: 'پہلا ٹکڑا',
    dueDate: 'آخری تاریخ',
    remarks: 'تبصرے',
    submitOrder: 'آرڈر جمع کروائیں'
  }
};

function setLanguage(selectedLanguage) {
  const language = translations[selectedLanguage] ? selectedLanguage : 'english';
  localStorage.setItem('language', language);

  document.querySelectorAll('.language-switcher button').forEach(button => {
    const onclick = button.getAttribute('onclick') || '';
    button.classList.toggle('active', onclick.includes(`setLanguage('${language}')`));
  });

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    const translation = translations[language][key] || translations.english[key] || element.textContent;

    const hasChildElements = Array.from(element.childNodes).some(node => node.nodeType === Node.ELEMENT_NODE);
    if (hasChildElements) {
      let replaced = false;
      Array.from(element.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          if (!replaced) {
            node.textContent = translation;
            replaced = true;
          } else {
            element.removeChild(node);
          }
        }
      });
      if (!replaced) {
        element.appendChild(document.createTextNode(translation));
      }
    } else {
      element.textContent = translation;
    }
  });

  if (language === 'english') {
    document.body.style.direction = 'ltr';
    document.body.style.fontFamily = '';
  } else {
    document.body.style.direction = 'rtl';
    document.body.style.fontFamily = '"Noto Sans Arabic", sans-serif';
  }
}

// Show measurements section on page load with all fields visible initially

document.addEventListener('DOMContentLoaded', function() {
  const measurementsSection = document.querySelector('.measurements-section');

  // Define fields for each type of garment
  const garmentFields = {
    dishdasha: ['length', 'shoulder', 'sleeves', 'chest', 'half-chest', 'vest-measurement', 'bottom', 'hem-fold'],
    dagla: ['length', 'shoulder', 'sleeves', 'chest', 'bottom'],
    vest: ['length', 'shoulder', 'chest', 'half-chest', 'bottom'],
    shirt: ['length', 'shoulder', 'sleeves', 'chest'],
    pants: ['length', 'waist', 'bottom']
  };

  // Get all garment checkboxes including reset
  const checkboxes = document.querySelectorAll('#dishdasha, #dagla, #vest, #shirt, #pants, #reset-measurements');

  // Function to update measurements visibility
  function updateMeasurements() {
    const resetChecked = document.getElementById('reset-measurements').checked;
    const selectedGarments = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked && checkbox.id !== 'reset-measurements')
      .map(checkbox => checkbox.id);

    if (resetChecked || selectedGarments.length === 0) {
      measurementsSection.style.display = 'block';
      document.querySelectorAll('.measurement-grid > div').forEach(div => {
        div.style.display = 'block';
      });
      return;
    }

    measurementsSection.style.display = 'block';

    const fieldsToShow = new Set();
    selectedGarments.forEach(garment => {
      garmentFields[garment].forEach(field => fieldsToShow.add(field));
    });

    document.querySelectorAll('.measurement-grid > div').forEach(div => {
      div.style.display = 'none';
    });

    fieldsToShow.forEach(field => {
      const fieldDiv = document.querySelector(`.field-${field}`);
      if (fieldDiv) {
        fieldDiv.style.display = 'block';
      }
    });
  }

  // Add event listeners to checkboxes
  checkboxes.forEach(checkbox => checkbox.addEventListener('change', updateMeasurements));

  // Initialize measurements and language
  updateMeasurements();
  const savedLanguage = localStorage.getItem('language') || 'english';
  setLanguage(savedLanguage);

  // Add event listener for submit button
  document.getElementById('submit-btn').addEventListener('click', submitOrder);
});

function submitOrder() {
  // Collect form values
  const client_name = document.getElementById('client-name').value;
  const client_number = document.getElementById('client-number').value;
  const client_address = document.getElementById('client-address').value;
  const date = document.getElementById('date-input').value;
  const due_date = document.getElementById('due-date').value;
  // const tailor = document.getElementById('tailors').value;

  // Collect boolean values from checkboxes
  const master = document.getElementById('master').checked;
  const trial = document.getElementById('trial').checked;
  const repair = document.getElementById('repair').checked;
  const full_order = document.getElementById('full-order').checked;
  const dishdasha = document.getElementById('dishdasha').checked;
  const dagla = document.getElementById('dagla').checked;
  const vest = document.getElementById('vest').checked;
  const shirt = document.getElementById('shirt').checked;
  const pants = document.getElementById('pants').checked;
  const socks = document.getElementById('socks').checked;
  const ghutra = document.getElementById('ghutra').checked;
  const chemagh = document.getElementById('chemagh').checked;

  // Collect text value from fabric radio buttons
  const fabric = document.querySelector('input[name="fabric"]:checked') ? document.querySelector('input[name="fabric"]:checked').value : '';

  // Prepare data object
  const orderData = {
    client_name,
    client_number,
    client_address,
    date,
    due_date,
    // tailor,
    master,
    trial,
    repair,
    full_order,
    dishdasha,
    dagla,
    vest,
    shirt,
    pants,
    socks,
    ghutra,
    chemagh,
    fabric
  };

  // Insert into Supabase table 'orders'
  client.from('orders').insert([orderData])
    .then(() => {
      alert('Order saved successfully');
    })
    .catch(() => {
      alert('Error saving order');
    });
}
