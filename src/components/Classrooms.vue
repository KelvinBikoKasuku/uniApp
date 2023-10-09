<template>
    <div id = 'classrooms'>
        <v-container>
        <v-layout column>
            <v-card
            class="mx-auto"
            width="500">
                <v-toolbar
                    color="teal"
                    theme="dark">
                    <v-toolbar-title class="text-h6">
                        Classrooms
                    </v-toolbar-title>    
                </v-toolbar>
                <v-container>
                    <v-table>
                        <thead class="header">
                            <tr>
                                <th class="text-left">Class Name</th>
                                <th class="text-left">Building</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="classroom in classrooms" :key="classroom.id">
                                <td>{{ classroom.classname }}</td>
                                <td>{{ classroom.building }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                
                </v-container>
                <v-divider></v-divider>

                
            </v-card>
        </v-layout>
        </v-container>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                classrooms: [
                   {
                    classname: 'Room 1',
                    building: 'Main Building',
                   },
                   {
                    classname: 'Room 2',
                    building: 'Main Building',
                   },
                   {
                    classname: 'Room 3',
                    building: 'Main Building',
                   }
                ]
            }
        }
    }
</script>