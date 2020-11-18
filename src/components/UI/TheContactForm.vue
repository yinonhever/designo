<template>
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__input-wrapper">
      <input
        v-model="formData.name"
        class="form__input"
        type="text"
        name="name"
        placeholder="Name"
        @input="validateOnChange"
      />
      <FormError v-if="errors.name && shouldValidate.name">
        {{ errors.name }}
      </FormError>
    </div>
    <div class="form__input-wrapper">
      <input
        v-model="formData.email"
        class="form__input"
        type="text"
        name="email"
        placeholder="Email Address"
        @input="validateOnChange"
      />
      <FormError v-if="errors.email && shouldValidate.email">
        {{ errors.email }}
      </FormError>
    </div>
    <div class="form__input-wrapper">
      <input
        v-model="formData.phone"
        class="form__input"
        type="tel"
        name="phone"
        placeholder="Phone"
      />
    </div>
    <div class="form__input-wrapper form__input-wrapper--message">
      <textarea
        v-model="formData.message"
        class="form__input"
        name="message"
        placeholder="Your Message"
        @input="validateOnChange"
      />
      <FormError v-if="errors.message && shouldValidate.message">
        {{ errors.message }}
      </FormError>
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
      shouldValidate: {
        name: false,
        email: false,
        message: false,
      },
    };
  },
  computed: {
    errors() {
      const errors = {};
      if (!this.isEmailValid) {
        errors.email = "Please use a valid email address";
      }
      for (let key in this.shouldValidate) {
        if (this.formData[key].trim() === "") {
          errors[key] = "Can't be empty";
        }
      }
      return errors;
    },
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
      this.shouldValidate[event.target.name] = true;
    },
    submitHandler() {
      if (this.isFormValid) {
        this.$emit("success");
        this.resetForm();
      } else {
        for (let key in this.shouldValidate) {
          this.shouldValidate[key] = true;
        }
      }
    },
    resetForm() {
      for (let key in this.formData) {
        this.formData[key] = "";
      }
      for (let key in this.shouldValidate) {
        this.shouldValidate[key] = false;
      }
    },
  },
};
</script>
