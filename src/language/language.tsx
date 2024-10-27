interface NotFound {
  notFound: string;
}

interface Home {
  test: string;
}

export interface Header {
  logo: string;
  navBar: string[];
}

export interface AboutUs {
  header: string;
  firstParag: string;
  unordList: string[];
  secondParag: string;
}

export interface CountriesForm {
  name: string;
  capital: string;
  population: string;
  flag: string;
  button: string;
}

export interface CountriesFormError {
  name: string;
  capital: string;
  population: string;
  flag: string;
}

export interface CountriesList {
  capital: string;
  population: string;
  readMore: string;
  delete: string;
  deleted: string;
  activate: string;
}

export interface Countries {
  main: string;
  sort: string[];
  form: CountriesForm;
  formError: CountriesFormError;
  list: CountriesList;
}

export interface ContactForm {
  name: string;
  surname: string;
  mail: string;
  message: string;
  submit: string;
}

interface ContactFormError {
  name: string;
  surname: string;
  mail: string;
  message: string;
}

export interface Contact {
  form: ContactForm;
  formError: ContactFormError;
}

interface Translation {
  notFound: NotFound;
  home: Home;
  header: Header;
  aboutUs: AboutUs;
  countries: Countries;
  contact: Contact;
}

export const translations: Record<"en" | "ka", Translation> = {
  en: {
    notFound: {
      notFound: "Not Found",
    },
    home: {
      test: "Landing",
    },
    header: {
      logo: "Countries",
      navBar: ["about", "countries", "contact"],
    },
    aboutUs: {
      header: "About Us",
      firstParag:
        "Welcome to World Nations, a platform dedicated to providing essential information about countries worldwide. Our goal is to make it easy for you to explore and compare key data on every country, including:",
      unordList: ["Population", "Total Area", "Capital City", "National Flag"],
      secondParag:
        "Whether you're a student, a traveler, or just someone interested in global facts, our simple and interactive cards give you a quick overview of every nation. Dive into the world of countries and learn more about the amazing diversity our planet has to offer!",
    },
    countries: {
      main: "This is site about countries",
      sort: ["asc", "desc", "normal"],
      form: {
        name: "Name",
        capital: "Capital",
        population: "Populaton",
        flag: "Flag",
        button: "Add Country",
      },
      formError: {
        name: "Country name must not exceed 56 characters",
        capital: "Capital is required",
        population: "Population must end with million",
        flag: "Please enter a valid image URL",
      },
      list: {
        capital: "Capital",
        population: "Population",
        readMore: "Read More",
        delete: "Delete",
        deleted: "Deleted",
        activate: "Activate",
      },
    },
    contact: {
      form: {
        name: "Name",
        surname: "Surname",
        mail: "Email",
        message: "Message",
        submit: "Send",
      },
      formError: {
        name: "Name is required",
        surname: "Surname is required",
        mail: "Email is required",
        message: "Message is required",
      },
    },
  },
  ka: {
    notFound: {
      notFound: "არ არის ნაპოვნი",
    },
    home: {
      test: "პროცესშია",
    },
    header: {
      logo: "ქვეყნები",
      navBar: ["ჩვენს შესახებ", "ქვეყნები", "კონტაქტი"],
    },
    aboutUs: {
      header: "ჩვენს შესახებ",
      firstParag:
        "კეთული იყოს თვქენი მობრძანება ქვეყნების ვებ საიტზე, ადგილი რომელიც მოგაწვდით ინფორმაციას მსოფლიოს გარშემო. ჩვენი მიზანია გაიგოთ ინფორმაცია ქვეყნებზე როგორებიცაა:",
      unordList: ["პოპულაცია", "ფართობი", "დედაქალაქი", "დრშა"],
      secondParag:
        "იმის და მიუხეავად ხართ თუ არა სტუდენტი, მოგზაური ან უბრალოდ გლობალური ფაქტებით დაინტერესებული ადამიანი, ჩვენი მარტივი და ინტერაქტიული ბარათები გაძლევთ სწრაფ მიმოხილვას ყველა ერის შესახებ. ჩაყვინთეთ ქვეყნების სამყაროში და გაიგეთ მეტი ჩვენი პლანეტის გასაოცარი მრავალფეროვნების შესახებ!",
    },
    countries: {
      main: "ეს საიტი არის ქვეყნების შესახებ",
      sort: ["ზრდადობა", "კლებადობა", "ორიგინალი"],
      form: {
        name: "სახელი",
        capital: "ქალაქი",
        population: "პოპულაცია",
        flag: "დროშა",
        button: "დაამატე ქვეყანა",
      },
      formError: {
        name: "ქვეყნის სახელი არ უნდა იყოს 56 ასოზე მეტი",
        capital: "ქალაქის შეყვანა აუცილებელია",
        population: "პოპულაცია უნდა მთავრდებოდეს million",
        flag: "შეიყვანეთ ვალიდური URL",
      },
      list: {
        capital: "ქალაქი",
        population: "პოპულაცია",
        readMore: "გაიგე მეტი",
        delete: "წაშლა",
        deleted: "წაშლილია",
        activate: "აქტივაცია",
      },
    },
    contact: {
      form: {
        name: "სახელი",
        surname: "გვარი",
        mail: "მეილი",
        message: "შეტყობინება",
        submit: "გაგზავნა",
      },
      formError: {
        name: "სახელი აუცილებელია",
        surname: "გვარი აუცილებელია",
        mail: "მეილი აუცილებელია",
        message: "შეტყობინება აუცილებელია",
      },
    },
  },
};
