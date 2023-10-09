<template>
    <div id = 'courses'>
        <v-container>
        <v-layout column>
            <v-card
            class="mx-auto"
            width="500">
                <v-toolbar
                    color="teal"
                    theme="dark">
                    <v-toolbar-title class="text-h6">
                        Courses
                    </v-toolbar-title>    
                </v-toolbar>
                <v-container>
                    <v-table>
                        <thead class="header">
                            <tr>
                                <th class="text-left">Course Name</th>
                                <th class="text-left">Department</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="course in courses" :key="course.id">
                                <td>{{ course.coursename }}</td>
                                <td>{{ course.department }}</td>
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
                courses: [
                   {
                    coursename: 'Machine Learning',
                    department: 'iLabAfrica',
                   },
                   {
                    coursename: 'Law',
                    department: 'Law School',
                   },
                   {
                    coursename: 'Commerce',
                    department: 'Business School',
                   }
                ]
            }
        }
    }
</script>