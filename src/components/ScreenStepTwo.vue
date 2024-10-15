<script setup>
  import { reactive, ref } from 'vue'
  import { RouterLink } from 'vue-router';
  import Vue3Signature from "vue3-signature"

  // icon
  import { FaChevronLeft } from '@kalimahapps/vue-icons';
  import { FaXmark } from '@kalimahapps/vue-icons';
  import { FaRegPaste } from '@kalimahapps/vue-icons';
  import { FaAnglesRight } from '@kalimahapps/vue-icons';
  import { FaArrowRotateRight } from '@kalimahapps/vue-icons';
  
</script>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        title_name: 'คัดกรองบุหรี่และแอลกอฮอล์',
        // // data inherited
        // inherPID: this.$cookies.get('personData').personPID,
        // inherGender: this.$cookies.get('personData').personGender,
        // inherAge: this.$cookies.get('personData').personAge,
        // inherBMI: 0,
        // data form input
        personAge: this.$cookies.get('personData').personAge,
        btnCkeckCigarette: 0,
        btnCkeckCigaretteRole: 0,
        cigaretteType: false,
        btnCkeckAlcohol: 0,
        btnCkeckAlcoholRole: 0,
        // error
        errCkeckCigarette: 0,
        errCkeckAlcohol: 0,
      }
    },
    methods: {
     
    },
    computed: {
    
    },
    methods: {
      btnNext() {
        if (this.btnCkeckCigarette != 0 || this.btnCkeckAlcohol != 0) {
          // ---- Begin Page 2 -----------------------------------------------------------
          let ftnd_1 = 0;
          let ftnd_2 = 0;
          let ftnd_3 = 0;
          let ftnd_4 = 0;
          let ftnd_5 = 0;
          let ftnd_6 = 0;
          let ftnd_sum = 0;

          if (this.btnCkeckCigarette == 3) {
            this.cigaretteType = true;
            // Array set 
            let arr_ftnd_1 = [0,1,2,3];
            let arr_ftnd_2 = [3,2,1,0];
            let arr_ftnd_3 = [1,0];
            let arr_ftnd_4 = [1,0];
            let arr_ftnd_5 = [1,0];
            let arr_ftnd_6 = [1,0];
            
                ftnd_1 = arr_ftnd_1[(Math.floor(Math.random() * arr_ftnd_1.length))];
                ftnd_2 = arr_ftnd_2[(Math.floor(Math.random() * arr_ftnd_2.length))];
                ftnd_3 = arr_ftnd_3[(Math.floor(Math.random() * arr_ftnd_3.length))];
                ftnd_4 = arr_ftnd_4[(Math.floor(Math.random() * arr_ftnd_4.length))];
                ftnd_5 = arr_ftnd_5[(Math.floor(Math.random() * arr_ftnd_5.length))];
                ftnd_6 = arr_ftnd_6[(Math.floor(Math.random() * arr_ftnd_6.length))];
                ftnd_sum = ftnd_1 + ftnd_2 + ftnd_3 + ftnd_4 + ftnd_5 + ftnd_6;
          } 

          let providing_ci = 1;
          let providing_al = 1;

          // console.log('ftnd_sum : ',ftnd_sum);
          // ---- End Page 2 -------------------------------------------------------------
          // --------------------------------------------------------------------------------------------------------------------------
          // ---- Begin Page 3 -----------------------------------------------------------

          let ci_assist_sum = 0; 
          let al_assist_sum = 0;

          if (this.btnCkeckCigarette == 3) {
            // Array set 
            if (this.btnCkeckCigaretteRole == 3) {
              let arr_ci_assist_sum = [14,15,16,17,18,19,20,21,22,23,24,25,26];
                      ci_assist_sum = arr_ci_assist_sum[(Math.floor(Math.random() * arr_ci_assist_sum.length))];
            } else if (this.btnCkeckCigaretteRole == 2) {
              let arr_ci_assist_sum = [4,5,6,7,8,9,10,11,12,13];
                      ci_assist_sum = arr_ci_assist_sum[(Math.floor(Math.random() * arr_ci_assist_sum.length))];
            } else {
              let arr_ci_assist_sum = [0,1,2,3];
                      ci_assist_sum = arr_ci_assist_sum[(Math.floor(Math.random() * arr_ci_assist_sum.length))];
            }
          } 

          if (this.btnCkeckAlcohol == 3) {
            // Array set 
            if (this.btnCkeckAlcoholRole == 3) {
              let arr_al_assist_sum = [11,12,13,14,15,16,17,18,19,20,21];
                      al_assist_sum = arr_al_assist_sum[(Math.floor(Math.random() * arr_al_assist_sum.length))];
            } else if (this.btnCkeckAlcoholRole == 2) {
              let arr_al_assist_sum = [6,7,8,9,10];
                      al_assist_sum = arr_al_assist_sum[(Math.floor(Math.random() * arr_al_assist_sum.length))];
            } else {
              let arr_al_assist_sum = [0,1,2,3,4,5];
                      al_assist_sum = arr_al_assist_sum[(Math.floor(Math.random() * arr_al_assist_sum.length))];
            }
          } 

          let arr_st5_1 = [0,1]; 
          let arr_st5_2 = [0,1];
          let arr_st5_3 = [0,1];
          let arr_st5_4 = [0,1,2];
          let arr_st5_5 = [0,1];

          let st5_1 = arr_st5_1[(Math.floor(Math.random() * arr_st5_1.length))];
          let st5_2 = arr_st5_2[(Math.floor(Math.random() * arr_st5_2.length))];
          let st5_3 = arr_st5_3[(Math.floor(Math.random() * arr_st5_3.length))];
          let st5_4 = arr_st5_4[(Math.floor(Math.random() * arr_st5_4.length))];
          let st5_5 = arr_st5_5[(Math.floor(Math.random() * arr_st5_5.length))];
          let st5_sum = st5_1 + st5_2 + st5_3 + st5_4 + st5_5;

          // console.log('ci_assist_sum : ',ci_assist_sum);
          // console.log('al_assist_sum : ',al_assist_sum);
          // console.log('st5_sum : ',st5_sum);
          // ---- End Page 3 -------------------------------------------------------------

          // ---- Begin Page 4 -----------------------------------------------------------

          let arr_s9q_1 = [0,1];
          let arr_s9q_2 = [0,1];
          let arr_s9q_3 = [0,1];
          let arr_s9q_4 = [0,1];
          let arr_s9q_5 = [0,1];
          let arr_s9q_6 = [0,1];
          let arr_s9q_7 = [0,1];
          let arr_s9q_8 = [0,1];
          let arr_s9q_9 = [0,1];

          let s9q_1 = arr_s9q_1[(Math.floor(Math.random() * arr_s9q_1.length))];
          let s9q_2 = arr_s9q_2[(Math.floor(Math.random() * arr_s9q_2.length))];
          let s9q_3 = arr_s9q_3[(Math.floor(Math.random() * arr_s9q_3.length))];
          let s9q_4 = arr_s9q_4[(Math.floor(Math.random() * arr_s9q_4.length))];
          let s9q_5 = arr_s9q_5[(Math.floor(Math.random() * arr_s9q_5.length))];
          let s9q_6 = arr_s9q_6[(Math.floor(Math.random() * arr_s9q_6.length))];
          let s9q_7 = arr_s9q_7[(Math.floor(Math.random() * arr_s9q_7.length))];
          let s9q_8 = arr_s9q_8[(Math.floor(Math.random() * arr_s9q_8.length))];
          let s9q_9 = arr_s9q_9[(Math.floor(Math.random() * arr_s9q_9.length))];

          let s9q_sum = s9q_1 + s9q_2 + s9q_3 + s9q_4 + s9q_5 + s9q_6 + s9q_7 + s9q_8 + s9q_9;

          let s8q_1 = 0; 
          let s8q_2 = 0; 
          let s8q_3 = 0; 
          let s8q_sub_3_1 = 0;
          let s8q_sub_3_2 = 0;
          let s8q_4 = 0; 
          let s8q_5 = 0; 
          let s8q_6 = 0; 
          let s8q_7 = 0; 
          let s8q_8 = 0; 
          let s8q_sum = 0;

          // ---- End Page 4 -------------------------------------------------------------

          // ---- Begin Page 5 -----------------------------------------------------------
          let fcg_age = 0;
          let get_fcg_age = this.$cookies.get('personData').personAge;
            if ((get_fcg_age >= 34) && (get_fcg_age <= 39)) {
              fcg_age = 0;
            } else if ((get_fcg_age >= 40) && (get_fcg_age <= 44)) {
              fcg_age = 0;
            } else if ((get_fcg_age >= 45) && (get_fcg_age <= 49)) {
              fcg_age = 1;
            } else if (get_fcg_age >= 50) {
              fcg_age = 2;
            } 

          let fcg_gender = 0;
          let get_fcg_gender = this.$cookies.get('personData').personGender;
            if (get_fcg_gender == "หญิง") {
              fcg_gender = 0;
            } else if (get_fcg_gender == "ชาย") {
              fcg_gender = 2;
            }
          
          let fcg_bmi = 0;
          let get_fcg_bmi = this.$cookies.get('screenStepOne').bmi;
            if (get_fcg_bmi < 23) {
              fcg_bmi = 0;
            } else if ((get_fcg_bmi >= 23) && (get_fcg_bmi < 27.5)) {
              fcg_bmi = 3;
            } else if (get_fcg_bmi >= 27.5) {
              fcg_bmi = 5;
            }

          let fcg_waistline = 0;
          let get_fcg_waistline = this.$cookies.get('screenStepOne').waistline;
            if (get_fcg_gender == "หญิง") {
                if (get_fcg_waistline < 80) {
                  fcg_waistline = 0
                } else if (get_fcg_waistline >= 80) {
                  fcg_waistline = 2
                }
            } else if (get_fcg_gender == "ชาย") {
              if (get_fcg_waistline < 90) {
                  fcg_waistline = 0
                } else if (get_fcg_waistline >= 90) {
                  fcg_waistline = 2
                }
            }

          let fcg_ht_check = 0;
          let family_disease = 0;
          let fcg_sum = fcg_age + fcg_gender + fcg_bmi + fcg_waistline + fcg_ht_check + family_disease;
          let fcbg = 0
          let fpg = this.$cookies.get('screenStepOne').blood_sugar;

          // ---- End Page 5 -------------------------------------------------------------

          this.$cookies.set('screenStepTwo', {
            cigaretteType: this.cigaretteType,
            cigarette: this.btnCkeckCigarette,
            cigarette_role: this.btnCkeckCigaretteRole,
            alcohol: this.btnCkeckAlcohol,
            alcohol_role: this.btnCkeckAlcoholRole,
            providing_ci: providing_ci, 
            providing_al: providing_al,
            ftnd_1: ftnd_1,
            ftnd_2: ftnd_2,
            ftnd_3: ftnd_3,
            ftnd_4: ftnd_4,
            ftnd_5: ftnd_5,
            ftnd_6: ftnd_6,
            ftnd_sum: ftnd_sum,
            ci_assist_sum: ci_assist_sum, 
            al_assist_sum: al_assist_sum,
            st5_1: st5_1,
            st5_2: st5_2,
            st5_3: st5_3,
            st5_4: st5_4,
            st5_5: st5_5,
            st5_sum: st5_sum,
            s9q_1: s9q_1,
            s9q_2: s9q_2,
            s9q_3: s9q_3,
            s9q_4: s9q_4,
            s9q_5: s9q_5,
            s9q_6: s9q_6,
            s9q_7: s9q_7,
            s9q_8: s9q_8,
            s9q_9: s9q_9,
            s9q_sum: s9q_sum,
            s8q_1: s8q_1,
            s8q_2: s8q_2,
            s8q_3: s8q_3,
            s8q_sub_3_1: s8q_sub_3_1,
            s8q_sub_3_2: s8q_sub_3_2,
            s8q_4: s8q_4,
            s8q_5: s8q_5,
            s8q_6: s8q_6,
            s8q_7: s8q_7,
            s8q_8: s8q_8,
            s8q_sum: s8q_sum,
            fcg_age: fcg_age,
            fcg_gender: fcg_gender,
            fcg_bmi: fcg_bmi,
            fcg_waistline: fcg_waistline,
            fcg_ht_check: fcg_ht_check,
            family_disease: family_disease,
            fcg_sum: fcg_sum,
            fcbg: fcbg,
            fpg: fpg,

          }, '1d');
          // this.$cookies.get('personData')
          window.scrollTo(0,0);
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          this.$router.push('/screen_cvd')
        } else {
          if (this.btnCkeckCigarette == 0) {
            this.errCkeckCigarette = 1;
          }
          if (this.btnCkeckAlcohol == 0) {
            this.errCkeckAlcohol = 1;
          }
        } 

      },
      btnSaveExit(){

        if (this.btnCkeckCigarette != 0 || this.btnCkeckAlcohol != 0) {
          // ---- Begin Page 2 -----------------------------------------------------------
          let ftnd_1 = 0;
          let ftnd_2 = 0;
          let ftnd_3 = 0;
          let ftnd_4 = 0;
          let ftnd_5 = 0;
          let ftnd_6 = 0;
          let ftnd_sum = 0;

          if (this.btnCkeckCigarette == 3) {
            this.cigaretteType = true;
            // Array set 
            let arr_ftnd_1 = [0,1,2,3];
            let arr_ftnd_2 = [3,2,1,0];
            let arr_ftnd_3 = [1,0];
            let arr_ftnd_4 = [1,0];
            let arr_ftnd_5 = [1,0];
            let arr_ftnd_6 = [1,0];
            
                ftnd_1 = arr_ftnd_1[(Math.floor(Math.random() * arr_ftnd_1.length))];
                ftnd_2 = arr_ftnd_2[(Math.floor(Math.random() * arr_ftnd_2.length))];
                ftnd_3 = arr_ftnd_3[(Math.floor(Math.random() * arr_ftnd_3.length))];
                ftnd_4 = arr_ftnd_4[(Math.floor(Math.random() * arr_ftnd_4.length))];
                ftnd_5 = arr_ftnd_5[(Math.floor(Math.random() * arr_ftnd_5.length))];
                ftnd_6 = arr_ftnd_6[(Math.floor(Math.random() * arr_ftnd_6.length))];
                ftnd_sum = ftnd_1 + ftnd_2 + ftnd_3 + ftnd_4 + ftnd_5 + ftnd_6;
          } 

          let providing_ci = 1;
          let providing_al = 1;

          // console.log('ftnd_sum : ',ftnd_sum);
          // ---- End Page 2 -------------------------------------------------------------
          // --------------------------------------------------------------------------------------------------------------------------
          // ---- Begin Page 3 -----------------------------------------------------------

          let ci_assist_sum = 0; 
          let al_assist_sum = 0;

          if (this.btnCkeckCigarette == 3) {
            // Array set 
            if (this.btnCkeckCigaretteRole == 3) {
              let arr_ci_assist_sum = [14,15,16,17,18,19,20,21,22,23,24,25,26];
                      ci_assist_sum = arr_ci_assist_sum[(Math.floor(Math.random() * arr_ci_assist_sum.length))];
            } else if (this.btnCkeckCigaretteRole == 2) {
              let arr_ci_assist_sum = [4,5,6,7,8,9,10,11,12,13];
                      ci_assist_sum = arr_ci_assist_sum[(Math.floor(Math.random() * arr_ci_assist_sum.length))];
            } else {
              let arr_ci_assist_sum = [0,1,2,3];
                      ci_assist_sum = arr_ci_assist_sum[(Math.floor(Math.random() * arr_ci_assist_sum.length))];
            }
          } 

          if (this.btnCkeckAlcohol == 3) {
            // Array set 
            if (this.btnCkeckAlcoholRole == 3) {
              let arr_al_assist_sum = [11,12,13,14,15,16,17,18,19,20,21];
                      al_assist_sum = arr_al_assist_sum[(Math.floor(Math.random() * arr_al_assist_sum.length))];
            } else if (this.btnCkeckAlcoholRole == 2) {
              let arr_al_assist_sum = [6,7,8,9,10];
                      al_assist_sum = arr_al_assist_sum[(Math.floor(Math.random() * arr_al_assist_sum.length))];
            } else {
              let arr_al_assist_sum = [0,1,2,3,4,5];
                      al_assist_sum = arr_al_assist_sum[(Math.floor(Math.random() * arr_al_assist_sum.length))];
            }
          } 

          let arr_st5_1 = [0,1]; 
          let arr_st5_2 = [0,1];
          let arr_st5_3 = [0,1];
          let arr_st5_4 = [0,1,2];
          let arr_st5_5 = [0,1];

          let st5_1 = arr_st5_1[(Math.floor(Math.random() * arr_st5_1.length))];
          let st5_2 = arr_st5_2[(Math.floor(Math.random() * arr_st5_2.length))];
          let st5_3 = arr_st5_3[(Math.floor(Math.random() * arr_st5_3.length))];
          let st5_4 = arr_st5_4[(Math.floor(Math.random() * arr_st5_4.length))];
          let st5_5 = arr_st5_5[(Math.floor(Math.random() * arr_st5_5.length))];
          let st5_sum = st5_1 + st5_2 + st5_3 + st5_4 + st5_5;

          // console.log('ci_assist_sum : ',ci_assist_sum);
          // console.log('al_assist_sum : ',al_assist_sum);
          // console.log('st5_sum : ',st5_sum);
          // ---- End Page 3 -------------------------------------------------------------

          // ---- Begin Page 4 -----------------------------------------------------------

          let arr_s9q_1 = [0,1];
          let arr_s9q_2 = [0,1];
          let arr_s9q_3 = [0,1];
          let arr_s9q_4 = [0,1];
          let arr_s9q_5 = [0,1];
          let arr_s9q_6 = [0,1];
          let arr_s9q_7 = [0,1];
          let arr_s9q_8 = [0,1];
          let arr_s9q_9 = [0,1];

          let s9q_1 = arr_s9q_1[(Math.floor(Math.random() * arr_s9q_1.length))];
          let s9q_2 = arr_s9q_2[(Math.floor(Math.random() * arr_s9q_2.length))];
          let s9q_3 = arr_s9q_3[(Math.floor(Math.random() * arr_s9q_3.length))];
          let s9q_4 = arr_s9q_4[(Math.floor(Math.random() * arr_s9q_4.length))];
          let s9q_5 = arr_s9q_5[(Math.floor(Math.random() * arr_s9q_5.length))];
          let s9q_6 = arr_s9q_6[(Math.floor(Math.random() * arr_s9q_6.length))];
          let s9q_7 = arr_s9q_7[(Math.floor(Math.random() * arr_s9q_7.length))];
          let s9q_8 = arr_s9q_8[(Math.floor(Math.random() * arr_s9q_8.length))];
          let s9q_9 = arr_s9q_9[(Math.floor(Math.random() * arr_s9q_9.length))];

          let s9q_sum = s9q_1 + s9q_2 + s9q_3 + s9q_4 + s9q_5 + s9q_6 + s9q_7 + s9q_8 + s9q_9;

          let s8q_1 = 0; 
          let s8q_2 = 0; 
          let s8q_3 = 0; 
          let s8q_sub_3_1 = 0;
          let s8q_sub_3_2 = 0;
          let s8q_4 = 0; 
          let s8q_5 = 0; 
          let s8q_6 = 0; 
          let s8q_7 = 0; 
          let s8q_8 = 0; 
          let s8q_sum = 0;

          // ---- End Page 4 -------------------------------------------------------------

          // ---- Begin Page 5 -----------------------------------------------------------
          let fcg_age = 0;
          let get_fcg_age = this.$cookies.get('personData').personAge;
            if ((get_fcg_age >= 34) && (get_fcg_age <= 39)) {
              fcg_age = 0;
            } else if ((get_fcg_age >= 40) && (get_fcg_age <= 44)) {
              fcg_age = 0;
            } else if ((get_fcg_age >= 45) && (get_fcg_age <= 49)) {
              fcg_age = 1;
            } else if (get_fcg_age >= 50) {
              fcg_age = 2;
            } 

          let fcg_gender = 0;
          let get_fcg_gender = this.$cookies.get('personData').personGender;
            if (get_fcg_gender == "หญิง") {
              fcg_gender = 0;
            } else if (get_fcg_gender == "ชาย") {
              fcg_gender = 2;
            }
          
          let fcg_bmi = 0;
          let get_fcg_bmi = this.$cookies.get('screenStepOne').bmi;
            if (get_fcg_bmi < 23) {
              fcg_bmi = 0;
            } else if ((get_fcg_bmi >= 23) && (get_fcg_bmi < 27.5)) {
              fcg_bmi = 3;
            } else if (get_fcg_bmi >= 27.5) {
              fcg_bmi = 5;
            }

          let fcg_waistline = 0;
          let get_fcg_waistline = this.$cookies.get('screenStepOne').waistline;
            if (get_fcg_gender == "หญิง") {
                if (get_fcg_waistline < 80) {
                  fcg_waistline = 0
                } else if (get_fcg_waistline >= 80) {
                  fcg_waistline = 2
                }
            } else if (get_fcg_gender == "ชาย") {
              if (get_fcg_waistline < 90) {
                  fcg_waistline = 0
                } else if (get_fcg_waistline >= 90) {
                  fcg_waistline = 2
                }
            }

          let fcg_ht_check = 0;
          let family_disease = 0;
          let fcg_sum = fcg_age + fcg_gender + fcg_bmi + fcg_waistline + fcg_ht_check + family_disease;
          let fcbg = 0
          let fpg = this.$cookies.get('screenStepOne').blood_sugar;

          // ---- End Page 5 -------------------------------------------------------------

          this.$cookies.set('screenStepTwo', {
            cigaretteType: this.cigaretteType,
            cigarette: this.btnCkeckCigarette,
            cigarette_role: this.btnCkeckCigaretteRole,
            alcohol: this.btnCkeckAlcohol,
            alcohol_role: this.btnCkeckAlcoholRole,
            providing_ci: providing_ci, 
            providing_al: providing_al,
            ftnd_1: ftnd_1,
            ftnd_2: ftnd_2,
            ftnd_3: ftnd_3,
            ftnd_4: ftnd_4,
            ftnd_5: ftnd_5,
            ftnd_6: ftnd_6,
            ftnd_sum: ftnd_sum,
            ci_assist_sum: ci_assist_sum, 
            al_assist_sum: al_assist_sum,
            st5_1: st5_1,
            st5_2: st5_2,
            st5_3: st5_3,
            st5_4: st5_4,
            st5_5: st5_5,
            st5_sum: st5_sum,
            s9q_1: s9q_1,
            s9q_2: s9q_2,
            s9q_3: s9q_3,
            s9q_4: s9q_4,
            s9q_5: s9q_5,
            s9q_6: s9q_6,
            s9q_7: s9q_7,
            s9q_8: s9q_8,
            s9q_9: s9q_9,
            s9q_sum: s9q_sum,
            s8q_1: s8q_1,
            s8q_2: s8q_2,
            s8q_3: s8q_3,
            s8q_sub_3_1: s8q_sub_3_1,
            s8q_sub_3_2: s8q_sub_3_2,
            s8q_4: s8q_4,
            s8q_5: s8q_5,
            s8q_6: s8q_6,
            s8q_7: s8q_7,
            s8q_8: s8q_8,
            s8q_sum: s8q_sum,
            fcg_age: fcg_age,
            fcg_gender: fcg_gender,
            fcg_bmi: fcg_bmi,
            fcg_waistline: fcg_waistline,
            fcg_ht_check: fcg_ht_check,
            family_disease: family_disease,
            fcg_sum: fcg_sum,
            fcbg: fcbg,
            fpg: fpg,

          }, '1d');
          // this.$cookies.get('personData')
          window.scrollTo(0,0);
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

          var dataPersonScreen = []

          dataPersonScreen.push(`{"weight":` + this.$cookies.get('screenStepOne').weight + `,` 
              +`"height":` + this.$cookies.get('screenStepOne').height + `,` 
              +`"waistline":` + this.$cookies.get('screenStepOne').waistline + `,`
              +`"bp_top":` + this.$cookies.get('screenStepOne').bp_top + `,` 
              +`"bp_down":` + this.$cookies.get('screenStepOne').bp_down + `,` 
              +`"bmi":` + this.$cookies.get('screenStepOne').bmi + `,`
              +`"blood_sugar":`+ this.$cookies.get('screenStepOne').blood_sugar 
          +`}`);

          dataPersonScreen.push(`{"cigarette":` + this.$cookies.get('screenStepTwo').cigarette + `,` 
              +`"cigarette_role":` + this.$cookies.get('screenStepTwo').cigarette_role + `,` 
              +`"providing_ci":` + this.$cookies.get('screenStepTwo').providing_ci + `,` 
              +`"alcohol":` + this.$cookies.get('screenStepTwo').alcohol + `,` 
              +`"alcohol_role":` + this.$cookies.get('screenStepTwo').alcohol_role + `,` 
              +`"providing_al":` + this.$cookies.get('screenStepTwo').providing_al + `,` 
              +`"ftnd_1":` + this.$cookies.get('screenStepTwo').ftnd_1 + `,` 
              +`"ftnd_2":` + this.$cookies.get('screenStepTwo').ftnd_2 + `,` 
              +`"ftnd_3":` + this.$cookies.get('screenStepTwo').ftnd_3 + `,` 
              +`"ftnd_4":` + this.$cookies.get('screenStepTwo').ftnd_4 + `,` 
              +`"ftnd_5":` + this.$cookies.get('screenStepTwo').ftnd_5 + `,` 
              +`"ftnd_6":` + this.$cookies.get('screenStepTwo').ftnd_6 + `,` 
              +`"ftnd_sum":` + this.$cookies.get('screenStepTwo').ftnd_sum + `,` 
              +`"ci_assist_sum":` + this.$cookies.get('screenStepTwo').ci_assist_sum + `,` 
              +`"al_assist_sum":` + this.$cookies.get('screenStepTwo').al_assist_sum
          +`}`);

          dataPersonScreen.push(`{"st5_1":` + this.$cookies.get('screenStepTwo').st5_1 + `,` 
              +`"st5_2":` + this.$cookies.get('screenStepTwo').st5_2 + `,` 
              +`"st5_3":` + this.$cookies.get('screenStepTwo').st5_3 + `,` 
              +`"st5_4":` + this.$cookies.get('screenStepTwo').st5_4 + `,` 
              +`"st5_5":` + this.$cookies.get('screenStepTwo').st5_5 + `,` 
              +`"st5_sum":` + this.$cookies.get('screenStepTwo').st5_sum + `,` 
              +`"s2q_1":` + 2 + `,` 
              +`"s2q_2":` + 2 + `,` 
              +`"s9q_1":` + this.$cookies.get('screenStepTwo').s9q_1 + `,` 
              +`"s9q_2":` + this.$cookies.get('screenStepTwo').s9q_2 + `,` 
              +`"s9q_3":` + this.$cookies.get('screenStepTwo').s9q_3 + `,` 
              +`"s9q_4":` + this.$cookies.get('screenStepTwo').s9q_4 + `,` 
              +`"s9q_5":` + this.$cookies.get('screenStepTwo').s9q_5 + `,` 
              +`"s9q_6":` + this.$cookies.get('screenStepTwo').s9q_6 + `,` 
              +`"s9q_7":` + this.$cookies.get('screenStepTwo').s9q_7 + `,` 
              +`"s9q_8":` + this.$cookies.get('screenStepTwo').s9q_8 + `,` 
              +`"s9q_9":` + this.$cookies.get('screenStepTwo').s9q_9 + `,` 
              +`"s9q_sum":` + this.$cookies.get('screenStepTwo').s9q_sum
          +`}`);

          dataPersonScreen.push(`{"s8q_1":` + this.$cookies.get('screenStepTwo').s8q_1 + `,` 
              +`"s8q_2":` + this.$cookies.get('screenStepTwo').s8q_2 + `,` 
              +`"s8q_3":` + this.$cookies.get('screenStepTwo').s8q_3 + `,` 
              +`"s8q_sub_3_1":` + this.$cookies.get('screenStepTwo').s8q_sub_3_1 + `,` 
              +`"s8q_sub_3_2":` + this.$cookies.get('screenStepTwo').s8q_sub_3_2 + `,` 
              +`"s8q_4":` + this.$cookies.get('screenStepTwo').s8q_4 + `,` 
              +`"s8q_5":` + this.$cookies.get('screenStepTwo').s8q_5 + `,` 
              +`"s8q_6":` + this.$cookies.get('screenStepTwo').s8q_6 + `,` 
              +`"s8q_7":` + this.$cookies.get('screenStepTwo').s8q_7 + `,` 
              +`"s8q_8":` + this.$cookies.get('screenStepTwo').s8q_8 + `,` 
              +`"s8q_sum":` + this.$cookies.get('screenStepTwo').s8q_sum
          +`}`);

          dataPersonScreen.push(`{"fcbg":` + this.$cookies.get('screenStepTwo').fcbg + `,` 
              +`"fcg_age":` + this.$cookies.get('screenStepTwo').fcg_age + `,`			
              +`"fcg_gender":` + this.$cookies.get('screenStepTwo').fcg_gender + `,`
              +`"fcg_bmi":` + this.$cookies.get('screenStepTwo').fcg_bmi + `,`
              +`"fcg_waistline":` + this.$cookies.get('screenStepTwo').fcg_waistline + `,`
              +`"fpg":` + this.$cookies.get('screenStepTwo').fpg + `,` 
              +`"fcg_ht_check":` + this.$cookies.get('screenStepTwo').fcg_ht_check + `,` 
              +`"family_disease":` + this.$cookies.get('screenStepTwo').family_disease + `,` 
              +`"fcg_sum":` + this.$cookies.get('screenStepTwo').fcg_sum  
          +`}`);
          
          // cvd --------------------------------------------------------------------------------
          dataPersonScreen.push(`{"high_risk":"` + 0 + `",` 
              +`"cvd_list":"` + 0 + `",`
              +`"cvd_risk":` + 0
          +`}`);

          dataPersonScreen.push(`{"cvd_sup_risk":"` + 0 + `",` 
              +`"cvd_advice":"` + 0 + `",` 
              +`"give_advice":` + 0
          +`}`);
          
          var sendCount = 0;
          var loopSet = dataPersonScreen.length - 1;

          for (let i = 0; i <= loopSet; i++) {
            
            var sheet = 'https://script.google.com/macros/s/AKfycbwwq431WJ0fiogdpzmvqJXZeVOXLe7xb_KgwYLwJP1-dBn8UNASGCsXH77eKjt9njg/exec';
            axios.get(sheet, { params: { action: 'update', pid: this.$cookies.get('personData').personPID, data: dataPersonScreen[i] }}, { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'})
            .then(response => {
              sendCount++
              if (sendCount == loopSet) {
                this.$swal({
                  title: "สำเร็จ",
                  text: "บันทึกข้อมูลเสร็จสิ้น",
                  icon: "success"
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.scrollTo(0,0);
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                    this.$router.push('/screen_list')
                  }
                });
              }
            })
            .catch(error => { 
              console.log(error);
            })
            let timerInterval;
            this.$swal({
              title: "บันทึกข้อมูล",
              text: "กำลังบันทึกข้อมูล ... ",
              icon: "info",
              didOpen: () => {
                this.$swal.showLoading();
              },
            });

          }

        } else {
          if (this.btnCkeckCigarette == 0) {
            this.errCkeckCigarette = 1;
          }
          if (this.btnCkeckAlcohol == 0) {
            this.errCkeckAlcohol = 1;
          }
        } 
      },
      goToScreenList() {
        window.scrollTo(0,0);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        this.$router.push('/screen_one')
      },
    },

  }
</script>

<template>
  <dialog id="my_modalCigaretteRole" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">ระดับการสูบ</h3>
      <p class="pb-2 pt-1 indent-4 text-neutral">โปรดเลือกระดับการสูบบุหรี่ โดยเลือกตัวเลือกดังต่อไปนี้</p>
      <div class="modal-action mb-8">
        <form method="dialog" class="flex flex-col w-full gap-3 px-3">
          <button @click="btnCkeckCigaretteRole = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">สูบนานๆ ครั้ง</button>
          <button @click="btnCkeckCigaretteRole = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">สูบเป็นครั้งคราว</button>
          <button @click="btnCkeckCigaretteRole = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">สูบเป็นประจำ</button>
        </form>
      </div>
    </div>
  </dialog>

  <dialog id="my_modalAlcoholRole" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">ระดับการดื่ม</h3>
      <p class="pb-2 pt-1 indent-4 text-neutral">โปรดเลือกระดับการดื่มแอลกอฮอล์ โดยเลือกตัวเลือกดังต่อไปนี้</p>
      <div class="modal-action mb-8">
        <form method="dialog" class="flex flex-col w-full gap-3 px-3">
          <button @click="btnCkeckAlcoholRole = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ดื่มนานๆ ครั้ง</button>
          <button @click="btnCkeckAlcoholRole = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ดื่มเป็นครั้งคราว</button>
          <button @click="btnCkeckAlcoholRole = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ดื่มเป็นประจำ</button>
        </form>
      </div>
    </div>
  </dialog>


  <!-- nav bar -->
  <div class="flex item-center navbar bg-white shadow rounded-3xl rounded-tl-none rounded-tr-none p-0 px-4">
    <div class="navbar-start">
      <button class="text-primary" @click="goToScreenList()"><FaChevronLeft class="" /></button>
    </div>
    <div class="navbar-center">
      <div class="text-lg font-bold text-slate-600">{{ title_name }}</div>
    </div>
    <div class="navbar-end">

    </div>
  </div>
  <!-- nav bar -->

  <div class="relative w-full">
    <div class="absolute items-center px-5 pt-7 mt-1">
      <span class=""><strong class="font-bold text-slate-500">คำอธิบาย</strong> </span>
        <ul class="list-disc ps-6 text-sm flex flex-col mt-1 gap-1">
          <li>คัดกรองความเสี่ยงจากการสูบบุหรี่</li>
          <li>คัดกรองความเสี่ยงจากการดื่มเครื่องดื่มแอลกอฮอล์</li>
          <!-- <li>การให้คำแนะนำ</li> -->
        </ul>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 L 0,93 C 99.38755980861245,95.51674641148325 198.7751196172249,98.03349282296651 278,97 C 357.2248803827751,95.96650717703349 416.2870813397128,91.38277511961722 523,92 C 629.7129186602872,92.61722488038278 784.0765550239236,98.4354066985646 884,90 C 983.9234449760764,81.5645933014354 1029.4066985645934,58.875598086124405 1113,57 C 1196.5933014354066,55.124401913875595 1318.2966507177034,74.0622009569378 1440,93 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,500 L 0,218 C 125.05263157894737,200.76555023923447 250.10526315789474,183.53110047846891 326,180 C 401.89473684210526,176.46889952153109 428.63157894736844,186.64114832535884 523,205 C 617.3684210526316,223.35885167464116 779.3684210526316,249.9043062200957 890,259 C 1000.6315789473684,268.0956937799043 1059.8947368421052,259.74162679425837 1143,250 C 1226.1052631578948,240.25837320574163 1333.0526315789475,229.12918660287082 1440,218 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,500 L 0,343 C 110.62200956937798,364.02392344497605 221.24401913875596,385.04784688995215 324,390 C 426.75598086124404,394.95215311004785 521.6459330143541,383.8325358851675 619,372 C 716.3540669856459,360.1674641148325 816.1722488038276,347.62200956937795 904,337 C 991.8277511961724,326.37799043062205 1067.665071770335,317.6794258373206 1155,319 C 1242.334928229665,320.3205741626794 1341.1674641148325,331.6602870813397 1440,343 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
  </div>
  
  <div class="bg-white p-0">
    <div class="bg-white">
      <div class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl p-4 ">
        <div class="flex flex-col text-slate-500">
          <span class="font-bold w-4/5">การสูบบุหรี่</span><span class="indent-4 text-neutral text-sm mt-2"> คัดกรองความเสี่ยงจากการสูบบุหรี่ โดยเลือกตัวเลือกดังต่อไปนี้</span> 
          <div v-if="errCkeckCigarette == 1">
            <span class="text-error font-bold mt-2">กรุณาเลือกตัวระบุเลือก !</span>
          </div>
      </div>
      <hr class="my-4">

      <div class="w-full mt-4">
        <div class="y-5">
          <div class="flex flex-col">
            <div v-if="btnCkeckCigarette == ''" class=" flex flex-col w-full gap-2">
              <button @click="btnCkeckCigarette = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่เคยสูบบุหรี่</button>
              <button @click="btnCkeckCigarette = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยสูบบุหรี่แต่เลิกแล้ว</button>
              <button @click="btnCkeckCigarette = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalCigaretteRole.showModal()">สูบ</button>
            </div>

            <div v-else-if="btnCkeckCigarette == 1" class=" flex flex-col w-full gap-2">
              <button @click="btnCkeckCigarette = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่เคยสูบบุหรี่</button>
              <button @click="btnCkeckCigarette = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยสูบบุหรี่แต่เลิกแล้ว</button>
              <button @click="btnCkeckCigarette = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalCigaretteRole.showModal()">สูบ</button>
            </div>

            <div v-else-if="btnCkeckCigarette == 2" class=" flex flex-col w-full gap-2">
              <button @click="btnCkeckCigarette = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่เคยสูบบุหรี่</button>
              <button @click="btnCkeckCigarette = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เคยสูบบุหรี่แต่เลิกแล้ว</button>
              <button @click="btnCkeckCigarette = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalCigaretteRole.showModal()">สูบ</button>
            </div>

            <div v-else-if="btnCkeckCigarette == 3" class=" flex flex-col w-full gap-2">
              <button @click="btnCkeckCigarette = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่เคยสูบบุหรี่</button>
              <button @click="btnCkeckCigarette = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยสูบบุหรี่แต่เลิกแล้ว</button>
              <div v-if = "btnCkeckCigaretteRole == 1">
                <button @click="btnCkeckCigarette = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">สูบ ( สูบนานๆ ครั้ง )</button>
              </div>
              <div v-else-if = "btnCkeckCigaretteRole == 2">
                <button @click="btnCkeckCigarette = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">สูบ ( สูบเป็นครั้งคราว )</button>
              </div>
              <div v-else-if = "btnCkeckCigaretteRole == 3">
                <button @click="btnCkeckCigarette = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">สูบ ( สูบเป็นประจำ )</button>
              </div>
              <div v-else>
                <button @click="btnCkeckCigarette = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">สูบ</button>
              </div>
            </div>
          </div>
        </div>
      </div>

        <hr class="mt-4">
      </div>
    </div>

    <div class="bg-white pb-10">
      <div class="m-5 mx-4 mb-0 border-2 border-dashed rounded-2xl p-4 "> 
        <div class="flex flex-col text-slate-500">
          <span class="font-bold w-4/5">การดื่มแอลกอฮอล์</span><span class="indent-4 text-neutral text-sm mt-2"> คัดกรองความเสี่ยงจากการดื่มแอลกอฮอล์ โดยเลือกตัวเลือกดังต่อไปนี้</span> 
          <div v-if="errCkeckAlcohol == 1"><span class="text-error font-bold mt-2">กรุณาเลือกตัวระบุเลือก !</span></div>
        </div>
        <hr class="my-4">

        <div class="w-full mt-4">
          <div class="y-5">
            <div class="flex flex-col">
              <div v-if="btnCkeckAlcohol == ''" class=" flex flex-col w-full gap-2">
                <button @click="btnCkeckAlcohol = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ตลอดชีวิตไม่เคยดื่มเลย</button>
                <button @click="btnCkeckAlcohol = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยดื่มแต่เลิกแล้ว 1 ปีขึ้นไป</button>
                <button @click="btnCkeckAlcohol = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalAlcoholRole.showModal()">ดื่ม</button>
              </div>

              <div v-else-if="btnCkeckAlcohol == 1" class=" flex flex-col w-full gap-2">
                <button @click="btnCkeckAlcohol = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ตลอดชีวิตไม่เคยดื่มเลย</button>
                <button @click="btnCkeckAlcohol = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยดื่มแต่เลิกแล้ว 1 ปีขึ้นไป</button>
                <button @click="btnCkeckAlcohol = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalAlcoholRole.showModal()">ดื่ม</button>
              </div>

              <div v-else-if="btnCkeckAlcohol == 2" class=" flex flex-col w-full gap-2">
                <button @click="btnCkeckAlcohol = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ตลอดชีวิตไม่เคยดื่มเลย</button>
                <button @click="btnCkeckAlcohol = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เคยดื่มแต่เลิกแล้ว 1 ปีขึ้นไป</button>
                <button @click="btnCkeckAlcohol = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalAlcoholRole.showModal()">ดื่ม</button>
              </div>

              <div v-else-if="btnCkeckAlcohol == 3" class=" flex flex-col w-full gap-2">
                <button @click="btnCkeckAlcohol = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ตลอดชีวิตไม่เคยดื่มเลย</button>
                <button @click="btnCkeckAlcohol = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยดื่มแต่เลิกแล้ว 1 ปีขึ้นไป</button>
                <div v-if = "btnCkeckAlcoholRole == 1">
                  <button @click="btnCkeckAlcohol = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">ดื่ม ( ดื่มนานๆ ครั้ง )</button>
                </div>
                <div v-else-if = "btnCkeckAlcoholRole == 2">
                  <button @click="btnCkeckAlcohol = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">ดื่ม ( ดื่มเป็นครั้งคราว )</button>
                </div>
                <div v-else-if = "btnCkeckAlcoholRole == 3">
                  <button @click="btnCkeckAlcohol = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">ดื่ม ( ดื่มเป็นประจำ )</button>
                </div>
                <div v-else>
                  <button @click="btnCkeckAlcohol = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">ดื่ม</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr class="mt-4">
      </div>
    </div>
  </div>

  <div class="bg-white py-1 my-0">
  </div>

  <div class="relative mt-[-1px]">
    <div class="absolute w-full px-4">
      <button v-if="personAge <= 34" class="btn btn-lg btn-outline btn-primary w-full border-double border-[6px] border-[#e5e7eb] bg-white rounded-full shadow-md border-lg" @click="btnSaveExit()"> บันทึกและสิ้นสุดการคัดกรอง</button>
      <button v-else class="btn btn-lg btn-outline btn-primary w-full border-double border-[6px] border-[#e5e7eb] bg-white rounded-full shadow-lg" @click="btnNext()">หน้าถัดไป<FaAnglesRight class="mt-0.5 "/></button>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,60 C 100.66985645933013,61.827751196172244 201.33971291866027,63.655502392344495 308,59 C 414.66028708133973,54.344497607655505 527.3110047846891,43.20574162679426 616,40 C 704.6889952153109,36.79425837320574 769.4162679425837,41.52153110047847 846,51 C 922.5837320574163,60.47846889952153 1011.0239234449762,74.70813397129187 1112,77 C 1212.9760765550238,79.29186602870813 1326.4880382775118,69.64593301435406 1440,60 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,140 C 115.35885167464113,122.21052631578948 230.71770334928226,104.42105263157896 331,114 C 431.28229665071774,123.57894736842104 516.488038277512,160.52631578947367 609,166 C 701.511961722488,171.47368421052633 801.33014354067,145.4736842105263 898,143 C 994.66985645933,140.5263157894737 1088.1913875598086,161.57894736842107 1178,165 C 1267.8086124401914,168.42105263157893 1353.9043062200958,154.21052631578948 1440,140 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,220 C 95.65550239234449,231.40669856459328 191.31100478468898,242.8133971291866 278,249 C 364.688995215311,255.1866028708134 442.4114832535886,256.1531100478469 531,244 C 619.5885167464114,231.84688995215313 719.0430622009569,206.57416267942583 826,202 C 932.9569377990431,197.42583732057417 1047.4162679425838,213.55023923444978 1151,220 C 1254.5837320574162,226.44976076555022 1347.2918660287082,223.2248803827751 1440,220 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,300 C 65.82775119617222,317.6937799043062 131.65550239234443,335.3875598086124 247,326 C 362.34449760765557,316.6124401913876 527.2057416267944,280.14354066985646 627,270 C 726.7942583732056,259.85645933014354 761.5215311004782,276.0382775119618 829,289 C 896.4784688995218,301.9617224880382 996.708133971292,311.70334928229664 1104,313 C 1211.291866028708,314.29665071770336 1325.645933014354,307.1483253588517 1440,300 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 200)"></path></svg>
  </div>
  
</template>