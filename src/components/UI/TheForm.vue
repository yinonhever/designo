<template>
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__input-wrapper">
      <input
        :value="formData.name"
        class="form__input"
        type="text"
        name="name"
        placeholder="Name"
        @input="validateOnChange"
      />
      <FormError :show="errors.name">{{ errors.name }}</FormError>
    </div>
    <div class="form__input-wrapper">
      <input
        :value="formData.email"
        class="form__input"
        type="text"
        name="email"
        placeholder="Email Address"
        @input="validateOnChange"
      />
      <FormError :show="errors.email">{{ errors.email }}</FormError>
    </div>
    <div class="form__input-wrapper">
      <input
        :value="formData.phone"
        class="form__input"
        type="tel"
        name="phone"
        placeholder="Phone"
      />
    </div>
    <div class="form__input-wrapper form__input-wrapper--message">
      <textarea
        :value="formData.message"
        class="form__input"
        name="message"
        placeholder="Your Message"
        @input="validateOnChange"
      />
      <FormError :show="errors.message">{{ errors.message }}</FormError>
    </div>
    <BaseButton>Submit</BaseButton>
  </form>
</template>

<script>
import FormError from "./FormError";

export default {
  components: { FormError },
  emits: ["success"],
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      errors: {},
      fieldsToValidate: ["name", "email", "message"],
    };
  },
  computed: {
    isEmailValid() {
      const re = /\S+@\S+\.\S+/;
      return re.test(this.formData.email);
    },
    isFormValid() {
      for (let key in this.errors) {
        if (this.errors[key]) return false;
      }
      return true;
    },
  },
  methods: {
    validateOnChange(event) {
      const { name, value } = event.target;
      this.formData[name] = value;

      if (this.fieldsToValidate.includes(name)) {
        this.updateErrors(name);
      }
    },
    submitHandler() {
      this.fieldsToValidate.forEach((key) => {
        this.updateErrors(key);
      });

      if (this.isFormValid) {
        this.$emit("success");
        this.resetForm();
      }
    },
    updateErrors(key) {
      if (this.formData[key].trim() === "") {
        this.errors[key] = "Can't be empty";
      } else if (key === "email" && !this.isEmailValid) {
        this.errors.email = "Please use a valid email address";
      } else {
        this.errors[key] = null;
      }
    },
    resetForm() {
      for (let key in this.formData) {
        this.formData[key] = "";
      }
    },
  },
};
</script>
