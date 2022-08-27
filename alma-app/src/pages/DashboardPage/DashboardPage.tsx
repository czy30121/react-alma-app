import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { styles } from './DashboardPage.styles';
import { ProjectListContainer } from '../../containers/ProjectList/ProjectList';
import { DashboardPageProps } from './DashboardPage.types';
import { IProjectListItemProps } from '../../containers/ProjectList/ProjectList.types';
import {
    VERTEX as vertexShaderSource,
    FRAGMENT as fragmentShaderSource,
    KALEIDOSCOPE as kaleidoscopeShaderSource
} from '../../shaders/camera';

const PROJECTS: IProjectListItemProps[] = [
    {
        title: 'Camera',
        lastModified: '3 minutes ago',
        media: '',
        vertexShaderSource,
        fragmentShaderSource
    },
    {
        title: 'Kaleidoscope',
        lastModified: '2 days ago',
        media: '',
        vertexShaderSource,
        fragmentShaderSource: kaleidoscopeShaderSource
    }
];

export const DashboardPage = ({ navigation }: DashboardPageProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.projectsTitle}>My Projects</Text>
            <ProjectListContainer projects={PROJECTS} />
        </SafeAreaView>
    );
};
