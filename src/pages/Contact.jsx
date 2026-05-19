
import  { useState } from 'react';
import { Mail, Phone, MapPinIcon, Circle } from 'lucide-react';
import toast from 'react-hot-toast'; // your toast import
import { WEB3FORMS_KEY } from "../config";
import Loader from '../components/Loader';
import ContactUS from '../assets/images/Decoration/Contact_Us_Img.jpeg'

const Contact = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Form values state
  const [formValues, setFormValues] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    message: ''
  });

  // Errors state
  const [formErrors, setFormErrors] = useState({});

  // const stateOptions = [
  //   { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
  //   { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
  //   { value: 'Assam', label: 'Assam' },
  //   { value: 'Bihar', label: 'Bihar' },
  //   { value: 'Chhattisgarh', label: 'Chhattisgarh' },
  //   { value: 'Goa', label: 'Goa' },
  //   { value: 'Gujarat', label: 'Gujarat' },
  //   { value: 'Haryana', label: 'Haryana' },
  //   { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
  //   { value: 'Jharkhand', label: 'Jharkhand' },
  //   { value: 'Karnataka', label: 'Karnataka' },
  //   { value: 'Kerala', label: 'Kerala' },
  //   { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
  //   { value: 'Maharashtra', label: 'Maharashtra' },
  //   { value: 'Manipur', label: 'Manipur' },
  //   { value: 'Meghalaya', label: 'Meghalaya' },
  //   { value: 'Mizoram', label: 'Mizoram' },
  //   { value: 'Nagaland', label: 'Nagaland' },
  //   { value: 'Odisha', label: 'Odisha' },
  //   { value: 'Punjab', label: 'Punjab' },
  //   { value: 'Rajasthan', label: 'Rajasthan' },
  //   { value: 'Sikkim', label: 'Sikkim' },
  //   { value: 'Tamil Nadu', label: 'Tamil Nadu' },
  //   { value: 'Telangana', label: 'Telangana' },
  //   { value: 'Tripura', label: 'Tripura' },
  //   { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
  //   { value: 'Uttarakhand', label: 'Uttarakhand' },
  //   { value: 'West Bengal', label: 'West Bengal' },
  //   { value: 'Delhi', label: 'Delhi' },
  // ];

  const contactInfo = [
    {
      id: 1,
      icon: Mail,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Email',
      content: 'shrikarunadubeverages@gmail.com',
      aosDelay: '200',
    },
    {
      id: 2,
      icon: Phone,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Phone',
      content: ['+91 80504 04035','+91 80505 96283', '+91 81475 68056'],
      aosDelay: '250',
    },
    {
      id: 3,
      icon: MapPinIcon,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Address',
      content:
        'SY NO. 139/1, NEAR ADURU GANESHA TEMPLE, BIDARAHALLI, VIRGONAGAR POST, BENGALURU, KARNATAKA-560049, INDIA',
      aosDelay: '300',
    },
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  // Validation function
  const validate = () => {
    const errors = {};

    if (!formValues.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!formValues.mobile.trim()) {
      errors.mobile = "Please enter your phone number.";
    } else if (!/^\+?[\d\s\-]{7,15}$/.test(formValues.mobile.trim())) {
      errors.mobile = "Please enter a valid phone number.";
    }
    if (!formValues.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formValues.city.trim()) {
      errors.city = "Please enter your city.";
    }
    if (!formValues.message.trim()) {
      errors.message = "Please enter a message.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit handler
  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return; // stop if validation failed
    }

    setLoading(true);

    // Prepare form data
    const formData = new FormData(event.target);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New Contact from  Our Website");
   

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Your message has been sent successfully");
        event.target.reset();
        setSelectedState(null);
        setFormValues({
          name: '',
          mobile: '',
          email: '',
          city: '',
          message: ''
        });
        setFormErrors({});
      } else {
        toast.error("Something went wrong. Please try again ❌");
      }
    } catch (err) {
        toast.error("Network error. Please check your connection 🌐");
        console.error(err);
} finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-300 py-12 px-4 sm:py-16 md:py-20 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <div className="max-w-2xl space-y-6">
            <div>
              <h2 data-aos='fade-up' data-aos-delay='100' data-aos-easing="ease-in-out-back" className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
                Get In{' '}
                <span className="font-bold text-black">
                  Touch <span className="text-green-500">.</span>
                </span>
              </h2>
              <div className="flex justify-center gap-3 mt-4">
                <Circle  data-aos='fade-left' data-aos-delay='100'  className="text-pink-500 w-5 h-5" />
                <Circle   data-aos='fade-up' data-aos-delay='120' className="text-yellow-500 w-5 h-5" />
                <Circle  data-aos='fade-right' data-aos-delay='140' className="text-green-500 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex  flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* -------- FORM -------- */}
          <div
            className="flex-1 w-3/4 md:w-full bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 sm:p-8 border border-gray-100"
            data-aos="fade-right" data-aos-delay='160' data-aos-easing="ease-in-out"
          >
            <form className="space-y-6" onSubmit={onSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                  data-aos='fade-right' data-aos-easing="ease-in-out-cubic" data-aos-delay='100'
                    name="name"
                    placeholder="Your Name"
                    value={formValues.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  {formErrors.name && <p className="text-red-500 mt-1 text-sm">{formErrors.name}</p>}
                </div>

                <div>
                  <input
                  data-aos='fade-left' data-aos-easing="ease-in-out-cubic" data-aos-delay='200'
                    name="mobile"
                    placeholder="Phone"
                    value={formValues.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  {formErrors.mobile && <p className="text-red-500 mt-1 text-sm">{formErrors.mobile}</p>}
                </div>
              </div>

              <div>
                <input
                data-aos='fade-right' data-aos-easing="ease-in-out-cubic" data-aos-delay='300'
                  name="email"
                  placeholder="Your Email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {formErrors.email && <p className="text-red-500 mt-1 text-sm">{formErrors.email}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                  data-aos='fade-left' data-aos-easing="ease-in-out-cubic" data-aos-delay='400'
                    name="city"
                    placeholder="Enter Your City"
                    value={formValues.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  {formErrors.city && <p className="text-red-500 mt-1 text-sm">{formErrors.city}</p>}
                </div>
              </div>

              <div>
                <textarea
                data-aos='fade-up' data-aos-easing="ease-in-out-cubic" data-aos-delay='100'
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={formValues.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg"
                />
                {formErrors.message && <p className="text-red-500 mt-1 text-sm">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold overflow-x-hidden"
              >
                {loading ? <Loader/>: "Submit Now"}
              </button>
            </form>
          </div>

          {/* -------- IMAGE + INFO (UNCHANGED) -------- */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <div
              className="w-full max-w-md h-82 sm:h-82 md:h-80 overflow-hidden shadow-lg rounded-xl md:rounded-2xl mb-8"
              data-aos="zoom-in"
            >
              {/* IMAGE PLACEHOLDER */}
              <img className='w-full h-full object-cover' src = {ContactUS} alt="Contact_Us_img.png" />
            </div>

            <div  className="space-y-4 w-full max-w-md">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div data-aos-easing="ease-out-cubic" data-aos='fade-up' data-aos-delay='100' key={item.id} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md">
                    <div data-aos-easing="ease-out-cubic" data-aos='fade-right' data-aos-delay='120' className={`w-12 h-14 ${item.iconBg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div data-aos-easing="ease-out-cubic" data-aos='fade-left' data-aos-delay='120' >
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      {Array.isArray(item.content)
                        ? item.content.map((v, i) => <p key={i}>{v}</p>)
                        : <p>{item.content}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



