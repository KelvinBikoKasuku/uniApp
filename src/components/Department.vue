<template>
    <div id = 'department'>
        <v-container>
        <v-layout column>
            <v-card
            class="mx-auto"
            width="500">
                <v-toolbar
                    color="teal"
                    theme="dark">
                    <v-toolbar-title class="text-h6">
                        Departments
                    </v-toolbar-title>    
                </v-toolbar>
                <v-container>
                    <v-table>
                        <thead class="header">
                            <tr>
                                <th class="text-left">Department Name</th>
                                <th class="text-left">Head of Department</th>
                                <th class="text-left">Department Phone Number</th>
                                <th class="text-left">No of Lecturers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="department in department" :key="department.id">
                                <td>{{ department.departmentname }}</td>
                                <td>{{ department.headofdepartment }}</td>
                                <td>{{ department.departmentphonenumber }}</td>
                                <td>{{ department.nooflecturers }}</td>
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
                department: [
                   {
                    departmentname: 'iLabAfrica',
                    headofdepartment: 'Joseph Sevilla',
                    departmentphonenumber: 25467543218,
                    nooflecturers: 32,
                   },
                   {
                    departmentname: 'Business School',
                    headofdepartment: 'George Njenga',
                    departmentphonenumber: 25487569008,
                    nooflecturers: 56,
                   },
                   {
                    departmentname: 'Law School',
                    headofdepartment: 'John Adams',
                    departmentphonenumber: 25434214670,
                    nooflecturers: 23,
                   },
                ]
            }
        }
    }
</script>