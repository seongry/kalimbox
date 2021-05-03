<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Generator from "./page/Generator.svelte";
</script>

<Router url="/">
  <Route path="/" component={Generator} />
</Router>
