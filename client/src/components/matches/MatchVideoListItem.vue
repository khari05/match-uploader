<template>
  <VListItem :title="video.videoTitle"
             class="text-wrap"
  >
    <VListItemSubtitle class="text-wrap force-text-wrap">
      {{ subtitle }}
    </VListItemSubtitle>
    <template v-slot:prepend>
      <VIcon v-if="video.uploadInProgress"
             icon="mdi-loading mdi-spin"
             size="large"
      />
      <VIcon v-else-if="!!video.uploadError"
             icon="mdi-alert-circle-outline"
             color="error"
             size="large"
      />
      <VIcon v-else-if="video.uploaded"
             icon="mdi-cloud-check-variant"
             color="success"
             size="large"
      />
      <VIcon v-else
             icon="mdi-progress-upload"
             size="large"
      />
    </template>
    <template v-slot:append>
      <VBtn v-if="video.youTubeVideoUrl"
            density="default"
            variant="text"
            icon="mdi-open-in-new"
            :href="video.youTubeVideoUrl"
            target="_blank"
      />
    </template>
  </VListItem>
</template>

<script lang="ts" setup>
import {MatchVideoInfo} from "@/types/MatchVideoInfo";
import {computed} from "vue";

interface IProps {
  video: MatchVideoInfo;
}

const props = defineProps<IProps>();

const uploadStatus = computed(() => {
  if (props.video.uploadInProgress) {
    return "In progress";
  }

  if (props.video.uploadError) {
    return `Upload failed: ${props.video.uploadError}`;
  }

  if (props.video.uploaded) {
    return "Uploaded";
  }

  return "Not uploaded";
});

const subtitle = computed(() => {
  return `${uploadStatus.value} | ${props.video.path}`;
});
</script>
<style scoped>
/* https://stackoverflow.com/a/59769716 */
.force-text-wrap {
  -webkit-line-clamp: unset !important;
}
</style>
