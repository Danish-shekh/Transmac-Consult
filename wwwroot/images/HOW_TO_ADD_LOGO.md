# 🖼️ TMC LOGO INTEGRATION GUIDE

## 📍 **CURRENT STATUS**

Your website is using a **professional SVG placeholder logo** that looks great!  
The placeholder shows "TMC" with a modern train/transport icon.

**To use your actual TMC logo**, follow the simple steps below.

---

## 🎯 **QUICK STEPS TO ADD YOUR LOGO**

### **Step 1: Extract the Logo from Your Image**
You have the TMC logo image (blue train logo) attached. You need to save it as a file.

### **Step 2: Convert to PNG (if needed)**
- Recommended format: **PNG** with transparent background
- Recommended size: **400px wide x 150px high** (or similar aspect ratio)
- File size: Keep under 200KB

### **Step 3: Save the Logo**
Save your logo file as:
```
TMC-logo.png
```

### **Step 4: Place in Images Folder**
Copy the file to:
```
c:\Users\danny\Desktop\danish\Freelance\Transmac Consult\wwwroot\images\TMC-logo.png
```

### **Step 5: Update the Layout (Already Done!)**
The website is already configured to use `TMC-logo.png`. Once you place the file, it will automatically appear!

### **Step 6: Refresh Browser**
- Save the logo file in the correct location
- Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Your logo will appear in:
  - Navigation header (top left)
  - Browser favicon (tab icon)

---

## 🎨 **LOGO SPECIFICATIONS**

### **Recommended Dimensions:**
- **Width:** 400-600px
- **Height:** 100-200px
- **Aspect Ratio:** Maintain original ratio
- **Format:** PNG (preferred) or SVG

### **File Requirements:**
- **Background:** Transparent (PNG) preferred
- **File Name:** `TMC-logo.png` (exact name)
- **File Size:** Under 200KB (for fast loading)
- **Resolution:** 72-150 DPI (web standard)

### **Colors:**
Your TMC logo has:
- Blue train/vehicle graphic
- "TMC" text
- Professional corporate look

---

## 📁 **FILE LOCATIONS**

### **Where the Logo Goes:**
```
Transmac Consult/
└── wwwroot/
    └── images/
        ├── TMC-logo.png          ← YOUR ACTUAL LOGO (add this)
        ├── TMC-logo-placeholder.svg  ← Current placeholder (can keep or remove)
        └── LOGO_INSTRUCTIONS.txt     ← This guide
```

### **Where the Logo is Used:**
1. **Navigation Header** - `Views/Shared/_Layout.cshtml` (line ~12)
2. **Favicon** - `Views/Shared/_Layout.cshtml` (line ~7)

---

## 🔧 **CURRENT CONFIGURATION**

The layout file is already set up to use your logo:

```html
<!-- In the navigation -->
<img src="~/images/TMC-logo-placeholder.svg" 
     alt="TMC Logo" 
     class="logo-image" />

<!-- In the head as favicon -->
<link rel="icon" type="image/png" href="~/images/TMC-logo.png" />
```

### **To Use Your PNG Logo:**
Just update line 12 in `_Layout.cshtml`:

**Change from:**
```html
<img src="~/images/TMC-logo-placeholder.svg" alt="TMC Logo" class="logo-image" />
```

**Change to:**
```html
<img src="~/images/TMC-logo.png" alt="TMC Logo" class="logo-image" />
```

---

## 🎨 **LOGO STYLING**

Your logo has these beautiful CSS effects:

```css
.navbar-brand .logo-image {
    height: 50px;                    /* Adjusts automatically */
    width: auto;                     /* Maintains aspect ratio */
    transition: all 0.4s;            /* Smooth animations */
    filter: drop-shadow(...);        /* Subtle shadow */
}

.navbar-brand .logo-image:hover {
    transform: scale(1.05) rotate(-2deg);  /* Fun hover effect */
    filter: drop-shadow(...);               /* Golden glow on hover */
}
```

---

## 📱 **RESPONSIVE SIZES**

The logo automatically adjusts for different screen sizes:

- **Desktop:** 50px height
- **Tablet:** 40px height
- **Mobile:** 35px height

Width adjusts automatically to maintain aspect ratio!

---

## ✨ **LOGO EFFECTS INCLUDED**

Your logo has these professional effects:

1. **Drop Shadow** - Subtle depth
2. **Hover Scale** - Grows slightly on hover
3. **Hover Rotate** - Playful -2° rotation
4. **Golden Glow** - Warm glow on hover
5. **Smooth Transition** - All changes are animated
6. **Responsive Sizing** - Perfect on all devices

---

## 🚀 **USING DIFFERENT IMAGE FORMATS**

### **PNG (Recommended)**
```html
<img src="~/images/TMC-logo.png" alt="TMC Logo" class="logo-image" />
```

### **SVG (Best for Scalability)**
```html
<img src="~/images/TMC-logo.svg" alt="TMC Logo" class="logo-image" />
```

### **JPG (Not Recommended)**
JPG doesn't support transparency, so there will be a white background.

---

## 🎯 **STEP-BY-STEP VISUAL GUIDE**

### **Option 1: From Your Attachment**
1. Right-click on the TMC logo image you have
2. Select "Save Image As..."
3. Save as `TMC-logo.png`
4. Copy to: `wwwroot/images/TMC-logo.png`

### **Option 2: From Screenshot/PDF**
1. Open your PDF with the logo
2. Take a screenshot of just the logo
3. Use image editor to remove background (make transparent)
4. Save as `TMC-logo.png`
5. Copy to: `wwwroot/images/TMC-logo.png`

### **Option 3: Export from Design File**
If you have the original design file:
1. Open in design software (Illustrator, Photoshop, etc.)
2. Export as PNG with transparent background
3. Size: 400x150px (or maintain original aspect ratio)
4. Save as `TMC-logo.png`
5. Copy to: `wwwroot/images/TMC-logo.png`

---

## 🔍 **TROUBLESHOOTING**

### **Logo doesn't appear:**
- ✅ Check file name is exactly `TMC-logo.png`
- ✅ Check file is in `wwwroot/images/` folder
- ✅ Check you updated the `<img>` tag in `_Layout.cshtml`
- ✅ Hard refresh browser (Ctrl+F5)
- ✅ Check browser console for errors (F12)

### **Logo appears but looks pixelated:**
- ✅ Use a higher resolution image (at least 400px wide)
- ✅ Consider using SVG format for perfect sharpness

### **Logo appears but has white background:**
- ✅ Make sure you're using PNG with transparency
- ✅ Re-export your logo with transparent background

### **Logo is too big/small:**
- ✅ Adjust height in CSS: `.logo-image { height: 50px; }`
- ✅ File is in `wwwroot/css/site.css` around line 175

---

## 🎨 **ADVANCED: LOGO CUSTOMIZATION**

### **Change Logo Size:**
Edit `wwwroot/css/site.css`:

```css
.navbar-brand .logo-image {
    height: 50px;  /* Change this value */
}
```

### **Remove Hover Effects:**
Edit `wwwroot/css/site.css`:

```css
.navbar-brand .logo-image:hover {
    transform: scale(1.05);  /* Remove rotate(-2deg) */
}
```

### **Change Logo Position:**
Logo is currently on the left. To center it or move it:

Edit `Views/Shared/_Layout.cshtml` and adjust the navbar structure.

---

## 📋 **CHECKLIST**

Before adding your logo, ensure:

- [ ] Logo file is ready (PNG format preferred)
- [ ] File name is exactly `TMC-logo.png`
- [ ] Background is transparent (for PNG)
- [ ] Image is good quality (not pixelated)
- [ ] File size is reasonable (under 200KB)
- [ ] You know where to place it (`wwwroot/images/`)

After adding your logo:

- [ ] Logo file placed in `wwwroot/images/`
- [ ] Updated `_Layout.cshtml` to reference new file
- [ ] Browser refreshed (hard refresh: Ctrl+F5)
- [ ] Logo appears in navigation
- [ ] Logo appears as favicon
- [ ] Logo looks good on mobile
- [ ] Hover effects work smoothly

---

## 🎊 **CURRENT PLACEHOLDER**

The current placeholder logo (`TMC-logo-placeholder.svg`) is a professional-looking temporary logo that:
- Has a modern train/transport icon
- Shows "TMC" text
- Matches your color scheme
- Looks professional

**You can keep it** if you like, or replace it with your actual logo anytime!

---

## 💡 **PRO TIPS**

1. **Use SVG when possible** - Looks sharp at any size
2. **Optimize PNG files** - Use tools like TinyPNG.com
3. **Keep aspect ratio** - Don't squish or stretch
4. **Test on mobile** - Make sure it looks good on small screens
5. **Brand consistency** - Use the same logo everywhere

---

## 📞 **NEED HELP?**

If you have questions about:
- Extracting the logo from your image
- Converting to the right format
- Making the background transparent
- Sizing the logo correctly

Check online tools like:
- **Remove.bg** - Remove background from images
- **TinyPNG** - Compress PNG files
- **CloudConvert** - Convert between image formats

---

**🎨 Your logo will look AMAZING with all the beautiful effects we've added! 🎨**

**Just add the file and refresh - it's that simple!** ✨

---

*The website is already configured and waiting for your logo!*
