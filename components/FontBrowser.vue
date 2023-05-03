<template>
    <div class="w-full" :class="hover ? 'flex flex-wrap ' : 'relative justify-center mr-12'">
      <TypoBig @mouseover="hover = true"   v-bind="typo" v-for="(typo, index) in typos " class="transform w-112  h-152 transition duration-300 shrink-0 hover:-translate-y-1" :class="hover ? ' mx-4 translate-y-0' : '-translate-x-0 absolute '" :style="hover? `z-index: ${(typos.length)*10}` : `z-index: ${(typos.length - index - 1)*10}; 	transform: translateY(${index}rem) translateX(${-typos.length+index*3}rem);`"/>
  </div>
</template>

<script setup lang="ts">

const hover = ref(false)

const typos : Array<Typo> = [
  {
  name: "lustucrust",
  text: "La douleur peut etre positive",
  description: "Luistucrust est une néo-gothique influencée par les pleins des typographies gothiques. Elle a été composée principalement avec des barres verticales et a été élaborée d'abord pour un calendrier en soutien à un lieu autogéré, le Local Autogéré à Grenoble.",
  size: "2xl",
  preview: ["a b c d e f g h i j k l m n o p q r s t u v w x y z", "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", "0 1 2 3 4 5 6 7 8 9"],
},
{
  name: "digitale",
  text: "La propriete privee mene au crime",
  description: "Digitale est une typographie composée uniquement avec des slashs-anti-slashs, créée à l'origine pour une pochette d'un split K7 Guillem All/Ponge finalement non retenue. Elle devint une tentative de logo pour le groupe dont elle tire son nom.",
  size: "lg",
  preview: ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", "0 1 2 3 4 5 6 7 8 9"],
  capitalize: false
},
{
  name: "Ariale",
  text: "Ma.on doux.ce, nous étions comme deux exilé.es",
  description: "Ariale est une typographie composée uniquement avec des slashs-anti-slashs, créée à l'origine pour une pochette d'un split K7 Guillem All/Ponge finalement non retenue. Elle devint une tentative de logo pour le groupe dont elle tire son nom.",
  size: "xl", 
  preview: ["é.e u.e i.e d.e t.e r.e l.e l.le n.e n.ne x.ce x.se a.o a.e r.se aux.ales eur.ice eau.elle eaux.elles e.sse f.fe f.ve er.e s.e s.se s.tes t.te c.he c.que g.ue e.x p.m i.el", "É.E U.E I.E D.E T.E R.E L.E L.LE N.E N.NE X.CE X.SE A.O A.E R.SE AUX.ALES EUR.ICE EAU.ELLE EAUX.ELLES E.SSE F.FE F.VE ER.E S.E S.SE S.TES T.TE C.HE C.QUE G.UE E.X P.M I.EL" ],
},

]


</script>