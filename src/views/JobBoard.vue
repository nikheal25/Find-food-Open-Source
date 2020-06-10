<template>
  <div>
    <ChoiceForm></ChoiceForm>
  </div>
</template>

<script>
import ChoiceForm from "@/components/ChoiceForm.vue";
export default {
  name: "JobBoard",
  components: {
    ChoiceForm
  }
};
</script>

<style scoped>
* {
  justify-content: center;
  text-align: center;
  color: blue;
}
</style>