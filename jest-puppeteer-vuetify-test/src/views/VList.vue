<template>
  <div>
    <v-list class="test-list">
      <v-list-item class="test-list-item">
        <v-list-item-content class="test-list-item-content">
          <v-list-item-title class="test-list-item-title">title-1a</v-list-item-title>
          <v-list-item-subtitle class="test-list-item-subtitle">subtitle-1a</v-list-item-subtitle>
          <v-list-item-avatar class="test-list-item-avatar">
            <v-img src="/harold.png" />
          </v-list-item-avatar>
          <v-list-item-icon class="test-list-item-icon">
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-action class="test-list-item-action">
            <v-icon>mdi-tree</v-icon>
          </v-list-item-action>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>title-1b</v-list-item-title>
          <v-list-item-subtitle>subtitle-1b</v-list-item-subtitle>
          <v-list-item-avatar>
            <v-img src="/harold.png" />
          </v-list-item-avatar>
          <v-list-item-icon>
            <v-icon>mdi-jellyfish</v-icon>
          </v-list-item-icon>
          <v-list-item-action>
            <v-icon>mdi-tree</v-icon>
          </v-list-item-action>
        </v-list-item-content>
      </v-list-item>
      <v-list-group class="test-list-group">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>title-2</v-list-item-title>
            <v-list-item-subtitle>group-subtitle-2</v-list-item-subtitle>
            <v-list-item-avatar>
              <v-img src="/harold.png" />
            </v-list-item-avatar>
            <v-list-item-icon>
              <v-icon>mdi-cash-100</v-icon>
            </v-list-item-icon>
            <v-list-item-action>
              <v-icon>mdi-tree</v-icon>
            </v-list-item-action>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>
